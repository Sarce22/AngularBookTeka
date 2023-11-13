export class Contants {

  //books
    static LOGIN = "/login"
    
    static GET_ALL_BOOKS = "/books" 
    static SEARCH_MOVIE = "/search/name" 

    static INSERT_BOOK = "/insertBook"
    static DELETE_BOOK = "/deleteBook/:isbn"
    static UPDATE_BOOK = "/editBook/:isbn"

    //Users

    static GET_BOOK = "/findBook/:isbn"
    static INSERT_USER = "/insertUser"
    static GET_ALL_USERS = "/users"
    static DELETE_USER = "/deleteUser/:id"
    static UPDATE_USER = "/editUser/:id"
    static CHECK_USER_ROL = "/checkUserRole"
  }