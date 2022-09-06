
// creates JavaScript vanilla Object, including JavaScript components, which can
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
    public constructor(//elementDiv: HTMLElement, 
      datasetQuery: DatasetQuery, 
      datasetOptions: DatasetOptions, 
      useMockData: boolean = false) {
        //let test = elementDiv;
        console.log('in create ', datasetQuery, datasetOptions, useMockData)
        // call the read service
        // create a Dataset with data loaded from read service
        const mockData = {
          "dataViews": [
            {
                "table": "posts",
                "columns": null,
                "rows": [
                    {
                        "title": "test",
                        "id": 1,
                        "description": "test"
                    }
                ]
            }
        ]
      };
        // let rawData = useMockData === false ? this.get() : mockData;
        console.log(' before hydrate ', mockData);
        let createdDataset = this.hyrdate(mockData);
        this.dataset = createdDataset;
    }
  
    // public CreateWithTestDataset(elementDiv: HTMLElement, datasourceName: string, testDatasource: boolean) {
    // }
  
    // call read service and get the data by datasource name
    // private get() : any // create a type for this
    // {
    //     // use the query tables to pass to read service
    //     // use the options to get the read service url
    // }
  
    // private getSystemColumnsTablesForDataset() : any // create a type for this
    // {
      
    // }
  
    // take the raw data and turn it into a Datasource
    private hyrdate(data: any) : Dataset {
        console.log('in hydrate data ', data)
        return new Dataset()
    }
  
  //   private loadMockData() : any {
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
  //   }
  
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
    tables: Array<string> = [];
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