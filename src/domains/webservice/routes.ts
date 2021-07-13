import controller from './controller';

export default [{
  method: 'get',
  path: '/continents',
  handlers: [
    controller.listContinents,
  ],
},{
    method: 'get',
    path: '/countrys',
    handlers: [
      controller.listContrys,
    ],
  }];
