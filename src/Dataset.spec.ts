// import { Dataset, DatasetLoaderCoreCreater, DatasetOptions, DatasetQuery } from './Dataset';
// import { DataviewRequest } from './models/dataview';
// import { Person } from './models/person.spec';
// import axios from "axios";
// import { Dummy } from './dummy';
// /**
//  * Dataset Loader test
//  */
//  describe('Dummy test', () => {
//     it('works if true is truthy', () => {
//       expect(true).toBeTruthy();
//     });
  
//     it('DummyClass is instantiable', () => {
//       expect(new Dummy()).toBeInstanceOf(Dummy);
//     });
  
//     it('getPerson should return a new Person', () => {
//       const person = new Person('john');
//       const result = new Dummy().getPerson('john');
//       expect(result.name).toEqual(person.name);
//     });
//   });
  
// // describe('Dataset Loader test', () => {
// //     //test('Expected undefined', () => {
// //     it("Get Users", () => {
// //         let dataQuery = new DatasetQuery();

// //         let dv = new DataviewRequest();
// //         dv.table = 'posts';
// //         dv.columns = ["title", "id", "description"];
// //         dataQuery.dataviews = [dv];

// //         let dataOptions = new DatasetOptions();
// //         dataOptions.readServiceUrl = 'http://localhost:5000/read';

// //         const datasetLoaderCoreCreator = new DatasetLoaderCoreCreater(dataQuery, dataOptions);
// //         let datasetAssert: Dataset =  datasetLoaderCoreCreator.dataset;
// //         //expect(datasetAssert.name).toBe('ds_new');
// //         //expect.assertions(1);
// //         return datasetLoaderCoreCreator.load()
// //             .then(data => {
// //                 console.log('Response -> ',JSON.stringify(data));
// //                 expect(true).toBeTruthy();
// //             })
// //             .catch(err => {
// //                 console.log('Error -> ', err);
// //                 expect(true).toBeTruthy();
// //             });

// //        // console.log('data ', datasetAssert.name)
// //     });

// //     test('Expected undefined', () => {
// //         console.log('START');
// //         expect.assertions(1);
// //         return axios.get('http://httpbin.org/ip')
// //           .then(data => {
// //             console.log('Response -> ',JSON.stringify(data));
// //             expect(true).toBeTruthy();
// //           })
// //           .catch(err => {
// //             console.log('Error -> ', err);
// //             expect(true).toBeTruthy();
// //           });
// //       });

// //     // it('create Dataset with real endpoint should return a new Dataset', () => {
// //     //     let dataQuery = new DatasetQuery();
        
// //     //     let dv = new DataviewRequest();
// //     //     dv.table = 'posts';
// //     //     dv.columns = ["title", "id", "description"];
// //     //     dataQuery.dataviews = [dv];

// //     //     let dataOptions = new DatasetOptions();
// //     //     dataOptions.readServiceUrl = 'http://localhost:5000/read';

// //     //     const datasetLoaderCoreCreator = new DatasetLoaderCoreCreater(dataQuery, dataOptions);
// //     //     let datasetAssert: Dataset =  datasetLoaderCoreCreator.dataset;
// //     //     expect(datasetAssert.name).toBe('ds_new');
// //     //     console.log('data ', datasetAssert)
// //     //     // const person = new Person('john');
// //     //     // const result = new Dummy().getPerson('john');
// //     //     // expect(result.name).toEqual(person.name);
// //     // });
// // });
