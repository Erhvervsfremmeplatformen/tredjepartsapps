import axios from 'axios';
import { TekstData, Tekster } from '../models/tekster.model';
import { toGraphqlSyntax } from '../utils/graphql-util';

export const API_PATH = '/graphql';

const ID = 'foo.bar.baz';

const GQL_RESPONSE = `
  id
  version
  jsonindhold
  registreringstidspunkt
`;

export class TekstService {
  private token?: string;

  public setToken(token: string): void {
    this.token = token;
  }

  public async hentTekster(): Promise<TekstData> {
    const queryname = 'bucketTekstnoegleGetJsonindhold';
    const data = (
      await axios.request({
        url: API_PATH,
        method: 'post',
        data: {
          query: `
            query {
              ${queryname}(
                id: "${ID}"
              ) {
                ${GQL_RESPONSE}
              }
            }
          `
        }
      })
    ).data.data[queryname];
    return data?.jsonindhold;
  }

  public async udgivTekster(tekster: Tekster): Promise<TekstData> {
    const tekstdata = { timestamp: Date.now(), tekster };
    const queryname = 'bucketTekstnoeglePutJsonindhold';
    const data = (
      await axios.request({
        url: API_PATH,
        method: 'post',
        headers: {
          Authorization: `Bearer ${this.token}`
        },
        data: {
          query: `
            mutation {
              ${queryname}(
                jsonTekstnoegleCommand: {
                  id: "${ID}"
                  jsonindhold: ${toGraphqlSyntax(tekstdata)}
                }
              ) {
                ${GQL_RESPONSE}
              }
            }
          `
        }
      })
    ).data.data[queryname];
    return data?.jsonindhold;
  }
}

export const tekstService = new TekstService();
