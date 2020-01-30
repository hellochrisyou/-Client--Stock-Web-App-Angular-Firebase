export const enum APIURL {
    findSearchHistory = 'http://localhost:8080/api/history/findSearchHistory/',
    findStockHistory = 'http://localhost:8080/api/history/findStockHistory/',
    findStocks = 'http://localhost:9090/api/stock/findStocks/',
    addSearchHistory = 'http://localhost:8080/api/history/addSearchHistory/',
    addStockHistory = 'http://localhost:8080/api/history/addStockHistory/',
    addStock = 'http://localhost:9090/api/stock/addStock/',
    deleteSearch = 'http://localhost:9090/api/history/deleteSearch/',    
    deleteStock = 'http://localhost:9090/api/stock/deleteStock/',    
    clearSearchHistory = 'http://localhost:8080/api/history/clearSearchHistory/',    
    clearStockHistory = 'http://localhost:8080/api/history/clearStockHistory/',    
    clearStocks = 'http://localhost:9090/api/stock/clearStocks/',    
    iex = 'https://sandbox.iexapis.com/stable/stock/market/collection/list?collectionName=',
    chart = 'https://sandbox.iexapis.com/stable/stock/',
  }
  