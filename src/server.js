import { createServer } from 'miragejs';
import { bucketClientService, DEFAULT_ENDPOINT } from '@erst-vg/bucket-json-client';
import StorageAPI from '@/components/StorageAPI.vue';

// Mock API som bruges når leverandør-applikationen kører udenfor VG - Denne + miragejs NPM transpileres ikke med
export default function () {

    const dummyResponse = {
        id: 'erhvervsfremme.tredjepartsapplikation.ansvarlighedstjekket.alleTekster',
        version: 1,
        jsonindhold: {
            timestamp: 1677678703205,
            tekster: {
                "faelles": {
                    "validering": {
                        "obligatorisk": "Vælg venligst en svarmulighed"
                    },

                }
            }

        },
    };

    createServer({
        routes() {
            this.post(DEFAULT_ENDPOINT, (schema, request) => {
                const { requestBody } = request;
                console.log("Request body ", requestBody);
                if (requestBody.includes('bucketTekstnoegleGetJsonindhold')) {
                    return {
                        data: {
                            bucketTekstnoegleGetJsonindhold: {
                                ...dummyResponse,
                            }
                        }
                    };
                }
                else if (requestBody.includes('bucketTekstnoeglePutJsonindhold')) {
                    console.log("Request body ", requestBody);
                    const response = dummyResponse;
                    response.jsonindhold.timestamp = new Date().getTime();
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
}
