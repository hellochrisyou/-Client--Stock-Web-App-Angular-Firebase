import { HttpResponse } from '@angular/common/http';
import { Stock } from './models';

export interface RequestCacheEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
}

export interface ColumnObject {
    columnId: string;
    propertyName: string;
}

export interface SearchGroup {
    disabled?: boolean;
    name: string;
    option: SearchOption[];
}

export interface SearchOption {
    value: string;
    viewValue: string;
}

export interface DialogData {
    title: string;
    subTitle: string;
    text: string;
    keyword?: Stock;
    increment?: string;
}

// export interface KeyValuePair {
//     key: string;
//     value: string;
// }
