import { ColumnObject } from '@shared/interface/interface';

export const STOCK_COL_OBJ: ColumnObject[] = [
    { columnId: 'options', propertyName: 'options' },
    { columnId: 'symbol', propertyName: 'symbol' },
    { columnId: 'exchange', propertyName: 'exchange' },
    { columnId: 'name', propertyName: 'name' },    
    { columnId: 'open', propertyName: 'open' },
    { columnId: 'low', propertyName: 'low' },
    { columnId: 'high', propertyName: 'high' },
    { columnId: 'latestPrice', propertyName: 'latestPrice' },
    { columnId: 'change', propertyName: 'change' },
    { columnId: 'changePercent', propertyName: 'changePercent' },
    { columnId: 'week52Low', propertyName: 'week52Low' },
    { columnId: 'week52High', propertyName: 'week52High' },
    { columnId: 'ytdChange', propertyName: 'ytdChange' }
];

export const SEARCH_COL_OBJ: ColumnObject[] = [
    { columnId: 'name', propertyName: 'name' },
];

export const COLS_DISPLAY = [
    'options', 'chart', 'symbol', 'name', 'exchange', 'open', 'low', 'high', 'latestPrice', 'change', 'changePercent', 'week52Low', 'week52High', 'ytdChange'
]
