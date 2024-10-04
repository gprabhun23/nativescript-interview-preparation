import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: IType[] = [
    { id: 1, name: 'Angular', fileName: 'Angular.pdf' },
    { id: 2, name: 'C#', fileName: 'CSharp.pdf' },
    { id: 3, name: 'OOPs', fileName: 'OOPs.pdf' },
    { id: 4, name: 'Simple Angular', fileName: 'Simple_Angular.pdf' },
    { id: 5, name: 'Simple SQL', fileName: 'Simple_SQL.pdf' },
    { id: 6, name: 'Simple C#', fileName: 'SimpleCSharp.pdf' },
    { id: 7, name: 'Simple OOPs', fileName: 'SimpleOOPs.pdf' },
    { id: 8, name: 'SQL', fileName: 'SQL.pdf' },
    { id: 9, name: 'T-SQL', fileName: 'T-SQL.pdf' }
  ];
}
export class IType {
  id: number;
  name: string;
  fileName: string;
}