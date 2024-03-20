const router = require('express').Router();
const createUserTable = require('../model/user_details');
const createAdminTable = require('../model/admin_details');
const createBookTable = require('../model/book_details');
const createIssuedBookTable = require('../model/issued_book');
const createAuthourDetails = require('../model/author_details');
const createCategoryDetails = require('../model/category_details');

const adminAddRouter = require('../controller/admin_add_query');
const adminlogin = require("../controller/admin_login");

const userAddRouter = require('../controller/user_add_query');
const userLogin = require('../controller/user_login');

const bookAddRouter = require('../controller/book_add_query');
const getBook = require('../controller/get_book');

const viewprofile = require('../controller/view_profile');

const currentTime = require('../controller/current_date');


const issuedBook = require('../controller/issuedBook_add_query');
const viewIssuedBook = require('../controller/view_issuedBook');
const ViewIssueUser = require('../controller/view_user_book');

const viewUsersDetails = require('../controller/get_reg_user');

const authorDetails = require('../controller/author_add_query');
const viewAuthor = require('../controller/view_author');


const categoryDetails = require('../controller/category_add_query');
const viewCategory = require('../controller/view_category');




//const changePass = require('../controller/change_pass');

router.get("/createusertable", createUserTable);
router.get("/createadmintable", createAdminTable);
router.get("/createbooktable", createBookTable);
router.get("/createissuedtable", createIssuedBookTable);
router.get("/createcategorydetails", createCategoryDetails);
router.get("/createauthordetails", createAuthourDetails);


router.get("/getbook", getBook);
router.get("/viewprofile", viewprofile);
router.get("/viewissueuser", ViewIssueUser);


router.get("/currentdate", currentTime);
router.post("/currentdate", currentTime);



router.get("/viewissue", viewIssuedBook);
router.get("/viewreguser", viewUsersDetails);
router.get("/viewauthor", viewAuthor);

router.get("/viewcategory", viewCategory);

router.post("/addadmin", adminAddRouter);
router.post("/adminlogin", adminlogin);


router.post("/issuedbook", issuedBook);

router.post("/adduser", userAddRouter);
router.post("/userlogin", userLogin);


router.post("/addbook", bookAddRouter);

router.post("/addauthor", authorDetails);

router.post("/addcategory", categoryDetails);

module.exports = router;