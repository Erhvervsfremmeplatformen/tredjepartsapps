const tekstnoegler: { [key: string]: string } = {
  // pagination
  'erhvervsfremme.content.application.pagination.label': 'Navigation i søgeresultater',
  'erhvervsfremme.content.application.pagination.first.button.aria_label': 'Første side',
  'erhvervsfremme.content.application.pagination.previous.button.aria_label': 'Forrige side',
  'erhvervsfremme.content.application.pagination.next.button.aria_label': 'Næste side',
  'erhvervsfremme.content.application.pagination.last.button.aria_label': 'Sidste side',
  'erhvervsfremme.content.application.pagination.backwards.button': 'Forrige',
  'erhvervsfremme.content.application.pagination.goto': 'Gå til side',
  'erhvervsfremme.content.application.pagination.currentpage': 'Nuværende side er nummer',
  'erhvervsfremme.content.application.pagination.forwards.button': 'Næste',
  'erhvervsfremme.content.application.pagination.mobile': 'Side {0} af {1}',
  'content.application.emnelandningside.button.visflere': 'Vis flere',
  'content.applikation.cardliste.results.text': 'Viser {0} af {1} resultater'
};

export type ParamType = (string | number)[] | string | number;

export function lookup(tekstnoegle: string, params?: ParamType) {
  const resolved = tekstnoegler[tekstnoegle];
  return resolved ? format(tekstnoegler[tekstnoegle], params) : tekstnoegle;
}

function format(text: string, params?: ParamType): string {
  const paramArray = [];
  if (params) {
    const type = typeof params;
    if (type === 'object') {
      paramArray.push(...(params as []));
    } else {
      paramArray.push(params);
    }
  }
  paramArray.forEach((param, index) => {
    text = text.replace(`{${index}}`, param.toString());
  });
  return text;
}
