import { createServer } from 'miragejs';
import { DEFAULT_ENDPOINT } from '@erst-vg/bucket-json-client';
import { TEKSTNOEGLE_BUNDT_ID } from '@/main';

/**
 * Dette er et mock storage JSON API som bruges når leverandør-applikationen kører udenfor VG. 
 */
export default function() {

    const stubbedResponse = {
        id: TEKSTNOEGLE_BUNDT_ID,
        version: 1, 
        jsonindhold: {
            timestamp: 1677678703205,
            tekster: {
                faelles: {
                    eksempel: 'Dette er en tekstnøgle, som kan redigeres'
                }
            }

        },
    };

    createServer({
        routes() {
            this.post(DEFAULT_ENDPOINT, (schema, request) => {
                const { requestBody } = request;
                if (requestBody.includes('bucketTekstnoegleGetJsonindhold')) {
                    return {
                        data: {
                            bucketTekstnoegleGetJsonindhold: {
                                ...stubbedResponse,
                            }
                        }
                    };
                }
                else if (requestBody.includes('bucketTekstnoeglePutJsonindhold')) {
                    const response = stubbedResponse;
                    const {jsonindhold} = response;
                    jsonindhold.timestamp = new Date().getTime();
                    const payload = extractTekstnoegle(requestBody);
                    if (payload) {
                        jsonindhold.tekster.faelles.eksempel = payload;
                    }
                    return {
                        data: {
                            bucketTekstnoeglePutJsonindhold: {
                                ...response,
                            }
                        }
                    };
                }
            });
        }
    });

    function extractTekstnoegle(requestBody) {
        let payload = null;
        const startFragment = 'tekster:{faelles:{eksempel:';
        const endFragment = '}}}}';
        const startPos = requestBody.indexOf(startFragment);
        const endPos = requestBody.indexOf(endFragment, startPos);
        if (startPos && endPos) {
            payload = requestBody.substring(startPos + startFragment.length + 2, endPos - 2);
        }
        return payload;

    }
}
