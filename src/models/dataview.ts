export class Dataview
{
    public table: string | undefined;
    public columns: string[] = [];
    public rows: any[] = [];
}

export class DataviewRequest
{
    public table: string | undefined;
    public columns: string[] = [];
    //public rows: any[] = [];
}

export class DataviewResponse
{
    public table: string | undefined;
    public columns: string[] = [];
    public rows: any[] = [];
}

// public class DataViewItem
// {
//     public string Table { get; set; }
//     public List<string> Columns { get; set; }
//     public IEnumerable<dynamic> Rows { get; set; }
// }