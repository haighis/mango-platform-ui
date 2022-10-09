
// creates JavaScript vanilla Object, including JavaScript components, which can

import { Dataview, DataviewRequest, DataviewResponse } from "./models/dataview";
import axios from "axios";

// be wrapped by the framework wrappers
export class DatasetLoader {
    // options class???
    constructor(
      //elementDiv: HTMLElement, 
      datasetQuery: DatasetQuery, datasetOptions: DatasetOptions) {
      // let test = elementDiv;
      // console.log('test ', test)
       new DatasetLoaderCoreCreater(datasetQuery, datasetOptions);
    }
  }
  
  export class DatasetLoaderCoreCreater {
    public dataset: Dataset;
    private datasetQuery: DatasetQuery;
    private datasetOptions: DatasetOptions;
    public constructor(//elementDiv: HTMLElement, 
      datasetQuery: DatasetQuery, 
      datasetOptions: DatasetOptions) {
        this.datasetQuery = datasetQuery;
        this.datasetOptions = datasetOptions;
        //let test = elementDiv;
        console.log('in create ', datasetQuery, datasetOptions)
        // call the read service
        // create a Dataset with data loaded from read service
      //   const mockData = {
      //     "dataViews": [
      //       {
      //           "table": "posts",
      //           "columns": null,
      //           "rows": [
      //               {
      //                   "title": "test",
      //                   "id": 1,
      //                   "description": "test"
      //               }
      //           ]
      //       }
      //   ]
      // };
        //let rawData = this.loadMockData();
    }

    public load() : Promise<Dataview[]> {
      //let rawData = (this.datasetQuery.useMockData === false) ? await this.get() : this.loadMockData();
      return this.get();
        // console.log(' before hydrate ', datasetQuery.useMockData, ' ' , rawData.table);
        //let createdDataset = this.hyrdate(rawData);
        //this.dataset = createdDataset;
    }

  
    // public CreateWithTestDataset(elementDiv: HTMLElement, datasourceName: string, testDatasource: boolean) {
    // }
  
    // call read service and get the data by datasource name
    private get() : Promise<Dataview[]> // create a type for this : Array<Dataview> 
    {
        //let dv = new Dataview();
        //return dv;
        // use the query tables to pass to read service
        // use the options to get the read service url
        //const { data } = await axios.post<DataviewResponse>(this.datasetOptions.readServiceUrl)
        // axios.post(this.datasetOptions.readServiceUrl).then(resp => {

        //     console.log(resp.data);
        // });
        let resp = new Array<Dataview>();
        
        //const sendPostRequest = async () => {
          // try {
          //     resp = await axios.post(this.datasetOptions.readServiceUrl, {}) as Dataview;
          //     console.log(resp);
          // } catch (err) {
          //     // Handle Error Here
          //     console.error(err);
          // }
        let postdata = this.datasetQuery.dataviews;
        let headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        };

        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        };
        // 'https://reqbin.com/echo/post/json'
        // this.datasetOptions.readServiceUrl
        // console.log('in before post to read svc ', postdata)
        // return await axios.post(this.datasetOptions.readServiceUrl, postdata, axiosConfig)
        // .then(function (resp) {
        //   console.log('RESPONSE', resp);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        return new Promise((resolve, reject) => {
          axios.post(this.datasetOptions.readServiceUrl, postdata, axiosConfig).then((response) => {
              resolve(response.data as Dataview[]);
          }, (err) => {
              reject(err);
          });
       });
        //return resp;
    }
  
    // private getSystemColumnsTablesForDataset() : any // create a type for this
    // {
      
    // }
  
    // take the raw data and turn it into a Datasource
    private hyrdate(data: Dataview[]) : Dataset {
        console.log('in hydrate - dataView is ', data[0].table, data[0].columns[0].toString())
        let ds = new Dataset();
        ds.name = 'ds_new';
        
        let dtArray = new Array<DataTable>();

        data.forEach(item => {
          let columns = new Array<DataColumn>();
          item.columns.forEach(col => {
            let colItem = new DataColumn(col.toString());
            columns.push(colItem);
          })
          let datatable = new DataTable(item.table!,columns,item.rows);
          dtArray.push(datatable);
        })
        
        ds.tables = dtArray;
        return ds;
    }
  
    private loadMockData() : Array<Dataview> {
      let dataviewArray = new Array<Dataview>();

      //dataview.table = "posts";
      return dataviewArray;
  //         return {
  //   "dataViews": [
  //     {
  //         "table": "posts",
  //         "columns": null,
  //         "rows": [
  //             {
  //                 "title": "test",
  //                 "id": 1,
  //                 "description": "test"
  //             }
  //         ]
  //     }
  // ]
  // };
    }
  
    // private loadMockColumns() : any {
    //   return [
    //     {
    //         "table_name": "posts",
    //         "column_name": "id",
    //         "ordinal_position": 1,
    //         "is_nullable": "YES",
    //         "data_type": "numeric"
    //     },
    //     {
    //         "table_name": "schemas",
    //         "column_name": "title",
    //         "ordinal_position": 2,
    //         "is_nullable": "YES",
    //         "data_type": "character varying"
    //     },
    //     {
    //         "table_name": "posts",
    //         "column_name": "description",
    //         "ordinal_position": 3,
    //         "is_nullable": "YES",
    //         "data_type": "character varying"
    //     },
    //     {
    //         "table_name": "schemas",
    //         "column_name": "layout",
    //         "ordinal_position": 5,
    //         "is_nullable": "YES",
    //         "data_type": "text"
    //     },
    //     {
    //         "table_name": "schemas",
    //         "column_name": "updated_at",
    //         "ordinal_position": 8,
    //         "is_nullable": "NO",
    //         "data_type": "timestamp without time zone"
    //     },
    //     {
    //         "table_name": "schemas",
    //         "column_name": "schema",
    //         "ordinal_position": 4,
    //         "is_nullable": "YES",
    //         "data_type": "text"
    //     },
    //     {
    //         "table_name": "schemas",
    //         "column_name": "id",
    //         "ordinal_position": 1,
    //         "is_nullable": "NO",
    //         "data_type": "bigint"
    //     },
    //     {
    //         "table_name": "schemas",
    //         "column_name": "type",
    //         "ordinal_position": 3,
    //         "is_nullable": "YES",
    //         "data_type": "character varying"
    //     },
    //     {
    //         "table_name": "posts",
    //         "column_name": "title",
    //         "ordinal_position": 2,
    //         "is_nullable": "YES",
    //         "data_type": "character varying"
    //     },
    //     {
    //         "table_name": "schemas",
    //         "column_name": "inserted_at",
    //         "ordinal_position": 7,
    //         "is_nullable": "NO",
    //         "data_type": "timestamp without time zone"
    //     },
    //     {
    //         "table_name": "schemas",
    //         "column_name": "parent",
    //         "ordinal_position": 9,
    //         "is_nullable": "YES",
    //         "data_type": "character varying"
    //     }
    // ]
    // }
  }
  
  /**
  https://docs.microsoft.com/en-us/dotnet/api/system.data.datacolumn.columnname?view=net-6.0
  Dataset
  DataTable
  DataColumn
  ColumnName
  MaxLength
  Ordinal
  DefaultValue
  */
  
  export class DatasetQuery {
    useMockData: boolean = false;
    dataviews: Array<DataviewRequest> = [];
  }
  
  export class DatasetOptions {
    readServiceUrl: string = '';
  }
  
  export class Dataset {
    name: string = '';
    tables: Array<DataTable> = [];
  }
  
  export class DataTable {
    tableName: string;
    dataColumns: Array<DataColumn>;
    dataRows: Array<string>;
    constructor(tableName: string, dataColumns: Array<DataColumn>, dataRows: Array<string>) {
      this.tableName = tableName;
      this.dataColumns = dataColumns;
      this.dataRows = dataRows;
    }
  
    // AddColumns(columns: Array<string>) {
    //   //this.columns = 
    // }
  }
  
  export class DataColumn {
    columnName: string;
    caption: string = '';
    ordinal: number = 0;
    defaultValue: string = '';
    constructor(columnName: string) {
      this.columnName = columnName;
    }
  }

// // creates JavaScript vanilla Object, including JavaScript components, which can

// import { Dataview, DataviewRequest, DataviewResponse } from "./models/dataview";
// import * as axios from "axios";

// // be wrapped by the framework wrappers
// export class DatasetLoader {
//     // options class???
//     constructor(
//       //elementDiv: HTMLElement, 
//       datasetQuery: DatasetQuery, datasetOptions: DatasetOptions) {
//       // let test = elementDiv;
//       // console.log('test ', test)
//        new DatasetLoaderCoreCreater(datasetQuery, datasetOptions);
//     }
//   }
  
//   export class DatasetLoaderCoreCreater {
//     public dataset: Dataset;
//     private datasetQuery: DatasetQuery;
//     private datasetOptions: DatasetOptions;
//     public constructor(//elementDiv: HTMLElement, 
//       datasetQuery: DatasetQuery, 
//       datasetOptions: DatasetOptions) {
//         this.datasetQuery = datasetQuery;
//         this.datasetOptions = datasetOptions;
//         //let test = elementDiv;
//         console.log('in create ', datasetQuery, datasetOptions)
//         // call the read service
//         // create a Dataset with data loaded from read service
//       //   const mockData = {
//       //     "dataViews": [
//       //       {
//       //           "table": "posts",
//       //           "columns": null,
//       //           "rows": [
//       //               {
//       //                   "title": "test",
//       //                   "id": 1,
//       //                   "description": "test"
//       //               }
//       //           ]
//       //       }
//       //   ]
//       // };
//         //let rawData = this.loadMockData();
//     }

//     public async load() {
//       //let rawData = (this.datasetQuery.useMockData === false) ? await this.get() : this.loadMockData();
//       var rawData = await this.get();
//         // console.log(' before hydrate ', datasetQuery.useMockData, ' ' , rawData.table);
//         //let createdDataset = this.hyrdate(rawData);
//         //this.dataset = createdDataset;
//     }

  
//     // public CreateWithTestDataset(elementDiv: HTMLElement, datasourceName: string, testDatasource: boolean) {
//     // }
  
//     // call read service and get the data by datasource name
//     private async get() // create a type for this : Array<Dataview> 
//     {
//         //let dv = new Dataview();
//         //return dv;
//         // use the query tables to pass to read service
//         // use the options to get the read service url
//         //const { data } = await axios.post<DataviewResponse>(this.datasetOptions.readServiceUrl)
//         // axios.post(this.datasetOptions.readServiceUrl).then(resp => {

//         //     console.log(resp.data);
//         // });
//         let resp = new Array<Dataview>();
        
//         //const sendPostRequest = async () => {
//           // try {
//           //     resp = await axios.post(this.datasetOptions.readServiceUrl, {}) as Dataview;
//           //     console.log(resp);
//           // } catch (err) {
//           //     // Handle Error Here
//           //     console.error(err);
//           // }
//         let postdata = this.datasetQuery.dataviews;
//         let headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Content-Type': 'application/json',
//         };

//         let axiosConfig = {
//           headers: {
//               'Content-Type': 'application/json;charset=UTF-8',
//               "Access-Control-Allow-Origin": "*",
//           }
//         };
//         // 'https://reqbin.com/echo/post/json'
//         // this.datasetOptions.readServiceUrl
//         console.log('in before post to read svc ', postdata)
//         return await axios.post(this.datasetOptions.readServiceUrl, postdata, axiosConfig)
//         .then(function (resp) {
//           console.log('RESPONSE', resp);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });

//         //return resp;
//     }
  
//     // private getSystemColumnsTablesForDataset() : any // create a type for this
//     // {
      
//     // }
  
//     // take the raw data and turn it into a Datasource
//     private hyrdate(data: Array<Dataview>) : Dataset {
//         console.log('in hydrate - dataView is ', data[0].table, data[0].columns[0].toString())
//         let ds = new Dataset();
//         ds.name = 'ds_new';
        
//         let dtArray = new Array<DataTable>();

//         data.forEach(item => {
//           let columns = new Array<DataColumn>();
//           item.columns.forEach(col => {
//             let colItem = new DataColumn(col.toString());
//             columns.push(colItem);
//           })
//           let datatable = new DataTable(item.table!,columns,item.rows);
//           dtArray.push(datatable);
//         })
        
//         ds.tables = dtArray;
//         return ds;
//     }
  
//     private loadMockData() : Array<Dataview> {
//       let dataviewArray = new Array<Dataview>();

//       //dataview.table = "posts";
//       return dataviewArray;
//   //         return {
//   //   "dataViews": [
//   //     {
//   //         "table": "posts",
//   //         "columns": null,
//   //         "rows": [
//   //             {
//   //                 "title": "test",
//   //                 "id": 1,
//   //                 "description": "test"
//   //             }
//   //         ]
//   //     }
//   // ]
//   // };
//     }
  
//     // private loadMockColumns() : any {
//     //   return [
//     //     {
//     //         "table_name": "posts",
//     //         "column_name": "id",
//     //         "ordinal_position": 1,
//     //         "is_nullable": "YES",
//     //         "data_type": "numeric"
//     //     },
//     //     {
//     //         "table_name": "schemas",
//     //         "column_name": "title",
//     //         "ordinal_position": 2,
//     //         "is_nullable": "YES",
//     //         "data_type": "character varying"
//     //     },
//     //     {
//     //         "table_name": "posts",
//     //         "column_name": "description",
//     //         "ordinal_position": 3,
//     //         "is_nullable": "YES",
//     //         "data_type": "character varying"
//     //     },
//     //     {
//     //         "table_name": "schemas",
//     //         "column_name": "layout",
//     //         "ordinal_position": 5,
//     //         "is_nullable": "YES",
//     //         "data_type": "text"
//     //     },
//     //     {
//     //         "table_name": "schemas",
//     //         "column_name": "updated_at",
//     //         "ordinal_position": 8,
//     //         "is_nullable": "NO",
//     //         "data_type": "timestamp without time zone"
//     //     },
//     //     {
//     //         "table_name": "schemas",
//     //         "column_name": "schema",
//     //         "ordinal_position": 4,
//     //         "is_nullable": "YES",
//     //         "data_type": "text"
//     //     },
//     //     {
//     //         "table_name": "schemas",
//     //         "column_name": "id",
//     //         "ordinal_position": 1,
//     //         "is_nullable": "NO",
//     //         "data_type": "bigint"
//     //     },
//     //     {
//     //         "table_name": "schemas",
//     //         "column_name": "type",
//     //         "ordinal_position": 3,
//     //         "is_nullable": "YES",
//     //         "data_type": "character varying"
//     //     },
//     //     {
//     //         "table_name": "posts",
//     //         "column_name": "title",
//     //         "ordinal_position": 2,
//     //         "is_nullable": "YES",
//     //         "data_type": "character varying"
//     //     },
//     //     {
//     //         "table_name": "schemas",
//     //         "column_name": "inserted_at",
//     //         "ordinal_position": 7,
//     //         "is_nullable": "NO",
//     //         "data_type": "timestamp without time zone"
//     //     },
//     //     {
//     //         "table_name": "schemas",
//     //         "column_name": "parent",
//     //         "ordinal_position": 9,
//     //         "is_nullable": "YES",
//     //         "data_type": "character varying"
//     //     }
//     // ]
//     // }
//   }
  
//   /**
//   https://docs.microsoft.com/en-us/dotnet/api/system.data.datacolumn.columnname?view=net-6.0
//   Dataset
//   DataTable
//   DataColumn
//   ColumnName
//   MaxLength
//   Ordinal
//   DefaultValue
//   */
  
//   export class DatasetQuery {
//     useMockData: boolean = false;
//     dataviews: Array<DataviewRequest> = [];
//   }
  
//   export class DatasetOptions {
//     readServiceUrl: string = '';
//   }
  
//   export class Dataset {
//     name: string = '';
//     tables: Array<DataTable> = [];
//   }
  
//   export class DataTable {
//     tableName: string;
//     dataColumns: Array<DataColumn>;
//     dataRows: Array<string>;
//     constructor(tableName: string, dataColumns: Array<DataColumn>, dataRows: Array<string>) {
//       this.tableName = tableName;
//       this.dataColumns = dataColumns;
//       this.dataRows = dataRows;
//     }
  
//     // AddColumns(columns: Array<string>) {
//     //   //this.columns = 
//     // }
//   }
  
//   export class DataColumn {
//     columnName: string;
//     caption: string = '';
//     ordinal: number = 0;
//     defaultValue: string = '';
//     constructor(columnName: string) {
//       this.columnName = columnName;
//     }
//   }