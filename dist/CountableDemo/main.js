(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home .component */ "./src/app/home/home .component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _filter_expence_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-expence.pipe */ "./src/app/filter-expence.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"],
                _filter_expence_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterExpencePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["StorageServiceModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                    { path: 'topbar', component: _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"] },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter-expence.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/filter-expence.pipe.ts ***!
  \****************************************/
/*! exports provided: FilterExpencePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterExpencePipe", function() { return FilterExpencePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterExpencePipe = /** @class */ (function () {
    function FilterExpencePipe() {
    }
    FilterExpencePipe.prototype.transform = function (value, desc) {
        if (!value)
            return [];
        if (!desc)
            return value;
        desc = desc.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(desc);
        });
    };
    FilterExpencePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterExpence'
        })
    ], FilterExpencePipe);
    return FilterExpencePipe;
}());



/***/ }),

/***/ "./src/app/home/home .component.ts":
/*!*****************************************!*\
  !*** ./src/app/home/home .component.ts ***!
  \*****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_storage, _fb) {
        this._storage = _storage;
        this._fb = _fb;
        this.data = [];
        this.expenceData = [];
        this.groupByWeek = {};
        this.expensesByWeek = [];
        this.defaultDate = new Date().toLocaleDateString();
        this.myFormat = "MM/dd/yyyy";
        this.rForm = _fb.group({
            'amount': [null],
            'description': [null],
            'date': [this.defaultDate]
        });
    }
    //ngOnInit function call on page load an load all data
    HomeComponent.prototype.ngOnInit = function () {
        if (this._storage.get("ExpenseData"))
            this.expenceData = JSON.parse(this._storage.get("ExpenseData"));
        this.getExpence();
        this.defaultDate = new Date().toLocaleDateString();
    };
    //Create guid for unique id
    HomeComponent.prototype.Guid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    //Add new expence
    HomeComponent.prototype.addExpense = function (value) {
        this.expenceData.push({
            id: this.Guid(),
            amount: value.amount,
            description: value.description,
            date: value.date,
            editing: false
        });
        this._storage.set("ExpenseData", JSON.stringify(this.expenceData));
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            position: 'center',
            type: 'success',
            title: 'Expence has been saved',
            showConfirmButton: false,
            timer: 1500
        });
        this.rForm.reset();
        this.getExpence();
    };
    //Get all expence data with total expence
    HomeComponent.prototype.getExpence = function () {
        this.data = JSON.parse(this._storage.get("ExpenseData"));
        this.totelExpenceAmount();
        this.getExpensesByWeek();
    };
    //Get totel expence till date
    HomeComponent.prototype.totelExpenceAmount = function () {
        this.sum = 0;
        for (var i = 0, a; a = this.data[i]; i++) {
            if (a.amount !== '') {
                this.sum += parseFloat(a.amount);
            }
        }
    };
    //Remove expence from the storage
    HomeComponent.prototype.removeExpence = function (expense) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Are you sure?',
                    text: 'You will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, keep it'
                }).then(function (result) {
                    if (result.value) {
                        var index = _this.data.indexOf(expense);
                        _this.data.splice(index, 1);
                        _this._storage.set("ExpenseData", JSON.stringify(_this.data));
                        _this.expenceData.splice(index, 1);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Deleted!', 'Your imaginary file has been deleted.', 'success');
                    }
                    else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                    _this.getExpence();
                });
                return [2 /*return*/];
            });
        });
    };
    //This event show row data in eitable mode
    HomeComponent.prototype.editExpense = function (expense) {
        expense.editing = true;
    };
    ;
    // This event update the row data after click on update button
    HomeComponent.prototype.updateExpence = function (expense) {
        this.expenceData = this.expenceData.filter(function (val) {
            return val.id !== expense.id;
        });
        expense.editing = false;
        this.expenceData.push({
            id: expense.id,
            amount: expense.amount,
            description: expense.description,
            date: expense.date,
            editing: false
        });
        this._storage.set("ExpenseData", JSON.stringify(this.expenceData));
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            position: 'center',
            type: 'success',
            title: 'Expence has been update',
            showConfirmButton: false,
            timer: 1500
        });
        this.getExpence();
    };
    // Return week number to calculate the weekly expence
    HomeComponent.prototype.getWeekNumber = function (d) {
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    };
    //Get list of all expenses group by week till date
    HomeComponent.prototype.getExpensesByWeek = function () {
        this.groupByWeek = {};
        this.expensesByWeek = [];
        for (var i_1 = 0; i_1 < this.data.length; i_1++) {
            var dt = new Date(this.data[i_1]['date']);
            var weekYear = dt.getUTCFullYear() + '-' + this.getWeekNumber(dt);
            if (this.groupByWeek.hasOwnProperty(weekYear)) {
                this.groupByWeek[weekYear].push(this.data[i_1]);
            }
            else {
                this.groupByWeek[weekYear] = [this.data[i_1]];
            }
        }
        for (var item in this.groupByWeek) {
            var sum = 0;
            var test = item;
            var weekData = this.groupByWeek[test];
            for (var i = 0; i < weekData.length; i++) {
                sum += +weekData[i].amount;
            }
            this.expensesByWeek.push({ week: test, amount: sum });
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    max-width:1170px;\r\n    margin:auto;\r\n    padding: 0 15px;\r\n}\r\n.clr {\r\n    clear: both;\r\n}\r\n.labelLeft{\r\n    float: left;\r\n    width: 175px;\r\n}\r\n.textBoxRight{\r\n   float: right;\r\n    width:calc(100% - 175px);\r\n}\r\n.textBoxRight input[type=\"text\"]{\r\n   width:100%;\r\n   padding: 8px 10px;\r\n    border:1px solid #ccc;\r\n    box-sizing: border-box;\r\n    color:#000;\r\n    font: 400 14px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;\r\n}\r\n.textBoxRight textarea{\r\n   width:100%;\r\n    min-height: 60px;\r\n    border:1px solid #ccc;\r\n    color:#000;\r\n    box-sizing: border-box;\r\n    padding: 8px;\r\n    font: 400 14px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;\r\n}\r\n.textBoxRight input[type=\"date\"]{\r\n    padding: 8px 10px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n.appheader {\r\n    padding-bottom: 15px;\r\n    line-height: 40px;\r\n    font-size: 30px;\r\n}\r\n.custom-error{\r\n    color: #a94442;\r\n    display: block;\r\n}\r\n.BtnRedIcon {\r\n    background: url(/assets/images/delete.png) top center no-repeat;\r\n    background-size: cover;\r\n    width: 24px;\r\n    height: 24px;\r\n    display: block;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin-right:5px;\r\n}\r\n.updateBg{\r\n    background: url(/assets/images/check.png) top center no-repeat;\r\n    background-size: cover;\r\n    width: 24px;\r\n    height: 24px;\r\n    display: block;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin-right:5px;\r\n}\r\n.searchLeftHeading{\r\n   float: left;\r\n    font-weight: 600;\r\n}\r\n.descriptionLabel label,.amountLabel label,.dateLabel label{\r\n   margin-bottom: 0px;\r\n    vertical-align: top;\r\n}\r\n.dateLabel input{\r\n   border:1px solid #ccc;\r\n}\r\n.amountLabel,.dateLabel{\r\n   margin-bottom:10px;\r\n}\r\n.descriptionLabel{\r\n   margin-bottom:5px;\r\n}\r\n.descriptionLabel span{\r\n   position: relative;\r\n    top:-5px;\r\n}\r\n.table-hover{\r\n   width:100%;\r\n}\r\n.table-hover thead th {\r\n    background-color: #4686bd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n}\r\n.table{\r\n   margin: 20px 0;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n    border: 1px solid #dee2e6;\r\n    border-bottom: 0px;\r\n    border-right:0px;\r\n    text-align: center;\r\n}\r\n.table tr td:last-child{\r\n    border-right: 1px solid #dee2e6;\r\n}\r\n.table tr:last-child td{\r\n    border-bottom: 1px solid #dee2e6;\r\n}\r\n.table-hover tbody tr:hover {\r\n    background-color: #77a1c5;\r\n    color: #fff;\r\n}\r\n.table-hover td input[type=text]{\r\n   padding:6px 10px;\r\n}\r\n.actionBtn{\r\n    margin: auto;\r\n    max-width: 40px;\r\n}\r\n.searchBox{\r\n   float:right;\r\n    padding-bottom: 10px;\r\n}\r\n.searchBox label{\r\n   margin-right:5px;\r\n    float: left;\r\n    padding-top:6px;\r\n}\r\n.searchBox input{\r\n   width:160px;\r\n    padding: 10px;\r\n    border: 1px #b1b1b1 solid;\r\n}\r\n.textBoxRight .btnSubmit{\r\n    background: #115188;\r\n    color: #fff;\r\n    padding: 9px 18px;\r\n    border-color: #115188;\r\n}\r\n.contentMain{\r\n    margin-top: 40px;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px #ccc;\r\n    min-height: 312px;\r\n}\r\n.descriptionTable{\r\n    margin-top: 40px;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px #ccc;\r\n    margin-bottom: 40px;\r\n}\r\n.textBoxRight textarea::-webkit-input-placeholder,.textBoxRight input::-webkit-input-placeholder {\r\n   /* Chrome/Opera/Safari */\r\n    color: #000;\r\n}\r\n.textBoxRight textarea::-moz-placeholder,.textBoxRight input::-webkit-input-placeholder {\r\n   /* Firefox 19+ */\r\n    color: #000;\r\n}\r\n.textBoxRight textarea:-ms-input-placeholder,.textBoxRight input::-webkit-input-placeholder {\r\n   /* IE 10+ */\r\n    color: #000;\r\n}\r\n.textBoxRight textarea :-moz-placeholder,.textBoxRight input::-webkit-input-placeholder {\r\n   /* Firefox 18- */\r\n    color: #000;\r\n}\r\n.tabletitle{\r\n   font-weight: 600;\r\n}\r\n.tableScroll{\r\n   max-height: 290px;\r\n    overflow: auto;\r\n}\r\n.tableScrollMobile{\r\n   width:100%;\r\n    overflow: auto;\r\n}\r\n@media screen and (max-width:650px){\r\n    .amountLabel label,.descriptionLabel label,.dateLabel label{\r\n       padding:0px;\r\n   }\r\n    .appheader{\r\n        padding-top: 15px;\r\n        padding-bottom: 5px;\r\n        line-height: 40px;\r\n        font-size: 22px;\r\n   }\r\n    .tableScroll{\r\n       width:100%;\r\n        overflow: auto;\r\n   }\r\n    .labelLeft{\r\n       width:100%;\r\n   }\r\n    .textBoxRight{\r\n       width:100%;\r\n   }\r\n    .textBoxRight input{\r\n       width: 100% !important;\r\n        box-sizing: border-box;\r\n   }\r\n    .textBoxRight .btnSubmit{\r\n       width:100% !important;\r\n   }\r\n    .appheader{\r\n       text-align: center\r\n   }\r\n    .searchLeftHeading{\r\n        float: none;\r\n        font-weight: 600;\r\n        text-align: center;\r\n   }\r\n    .searchBox{\r\n       margin-top: 10px;\r\n   }\r\n    .searchBox input{\r\n       width: 68px;\r\n   }\r\n    .tabletitle{\r\n       text-align: center;\r\n       ;\r\n   }\r\n}\r\n@media screen and (min-width:100px) and (max-width:985px){\r\n    .left-box{\r\n        width: 100% !important;\r\n        float: none;\r\n   }\r\n    .right-box{\r\n        width: 100% !important;\r\n        float: none;\r\n   }\r\n}\r\n.clear-both{\r\n    clear: both;\r\n}\r\n.left-box{\r\n    width: 49%;\r\n    float: left;\r\n}\r\n.right-box{\r\n    width: 49%;\r\n    float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n<div class=\"container\"> \n    <div class=\" left-box\">\n    <div class=\"contentMain\" > \n            <div class=\"appheader\">Add Detail</div>\n        <form class=\"form-horizontal\" [formGroup]=\"rForm\" (ngSubmit)=\"addExpense(rForm.value)\">\n            <div class=\"amountLabel\">\n                <div class=\"labelLeft\">\n                    <label>Amount</label>\n                </div>\n                <div class=\"textBoxRight\">\n                    <input type=\"text\"  placeholder=\"Enter Expence Amount\" formControlName=\"amount\"  pattern=\"\\d+(\\.\\d{1,2})?\">\n                    <span *ngIf=\"rForm.controls.amount.errors?.pattern\" class=\"custom-error\">Please enter a number value.</span>\n                </div>\n                <div class=\"clr\"></div>\n            </div>\n            <div class=\"descriptionLabel\">\n                <div class=\"labelLeft\">\n                    <label>Description</label>\n                </div>\n                <div class=\"textBoxRight\">\n                    <textarea placeholder=\"Description\"  formControlName=\"description\"  required></textarea>\n                    <span *ngIf=\"rForm.controls.description.errors?.required && rForm.controls.description.touched\" class=\"custom-error\">Please enter description.</span>\n                </div>\n                <div class=\"clr\"></div>\n            </div>\n            <div class=\"dateLabel\">\n                <div class=\"labelLeft\">\n                    <label>Date</label>\n                </div>\n                <div class=\"textBoxRight\"> \n                    <input type=\"date\" id=\"date\" value=\"{{defaultDate | date:'yyyy-MM-dd'}}\" class=\"col-sm-3\" formControlName=\"date\"required>\n                    <span *ngIf=\"rForm.controls.date.errors?.required && rForm.controls.date.touched\" class=\"custom-error\">Please enter the date.</span>\n                </div>\n                <div class=\"clr\"></div>\n            </div>\n            <div class=\"dateLabel\">\n                <div class=\"labelLeft\">                  \n                </div>\n                <div class=\"textBoxRight\">                                    \n                    <input type=\"submit\" class=\"btnSubmit\" value=\"Add\" [disabled]=\"!rForm.valid\">                    \n                </div>\n                <div class=\"clr\"></div>\n             </div>\n            <div>\n        </div>\n    </form>\n    </div>\n</div>\n\n<div class=\"right-box\"> \n    <div class=\"contentMain\">\n            <div class=\"tabletitle\">Expenses By Week</div>\n            <div class=\"tableScroll\">\n                <table class=\"table table-hover table-bordered\" cellpadding=\"0\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>Week</th>\n                            <th>Amount</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let expense of expensesByWeek\">\n                            <td>{{expense.week}}</td>\n                            <td>{{expense.amount}}</td>\n                        </tr>\n                        <tr>\n                            <td style=\"text-align:right\"><strong>Total</strong></td>  \n                            <td>\n                                <strong>{{ sum | currency }}</strong>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n</div>\n</div>\n<div class=\"clear-both\"></div>\n\n<div class=\"container\" style=\"margin-top: 40px; clear: both;\">\n  \n        <div class=\"descriptionTable\">\n            <div>\n            <div class=\"searchLeftHeading\">\n                    Expenses By Day\n            </div>\n            <div class=\"searchBox\">\n                <label>Search by description:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"description\">\n            </div>\n            <div class=\"clr\"></div>\n        </div>\n            <div class=\"tableScrollMobile\">\n                <table class=\"table table-hover table-bordered \" cellpadding=\"0\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>Date</th>\n                            <th>Description</th>\n                            <th>Amount</th>                            \n                            <th style=\"text-align:center;\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <tr *ngFor=\"let expence of data | filterExpence:description\">\n                            <td (click)=\"editExpense(expence)\">{{expence.date |date:myFormat}}</td>\n                            <td *ngIf=\"!expence.editing\" (click)=\"editExpense(expence)\">{{expence.description}}</td>\n                            <td *ngIf=\"expence.editing\">\n                                <input type=\"text\" name=\"abc\" [(ngModel)]=\"expence.description\">\n                            </td>\n                            <td *ngIf=\"!expence.editing\" (click)=\"editExpense(expence)\">{{expence.amount}}</td>\n                            <td *ngIf=\"expence.editing\">\n                                <input type=\"text\" [(ngModel)]=\"expence.amount\">\n                            </td>                           \n                            <td>\n                                <div class=\"actionBtn\">\n                                    <a *ngIf=\"!expence.editing\" class=\"BtnRedIcon\" (click)=\"removeExpence(expence)\" title=\"delete\"></a>\n                                </div>\n\n                                <div class=\"actionBtn\">\n                                    <a *ngIf=\"expence.editing\" class=\"updateBg\" (click)=\"updateExpence(expence)\" title=\"update\"></a>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr> \n                            <td colspan=\"2\"style=\"text-align:right\"><strong>Total</strong></td>   \n                            <td><strong>{{sum | currency}}</strong></td>\n                            <td></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n  \n    \n      \n  \n\n</div>"

/***/ }),

/***/ "./src/app/topbar/topbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/topbar/topbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerBg {\r\n    background-color: #115188;\r\n    color: #ffff;\r\n}\r\n.container{\r\n    max-width:1170px;\r\n    margin:auto;\r\n    padding: 0 15px;\r\n}\r\n.clr{\r\n   clear: both;\r\n}\r\n.navLink{\r\n   text-decoration: none;\r\n}\r\n.navLink:hover{\r\n   text-decoration: none;\r\n}\r\n.navLogo{\r\n   float: left;\r\n    padding: 14px 0;\r\n}\r\n.navRight{\r\n   float: right;\r\n}\r\n.navRight .navLink{\r\n   color:#fff;\r\n    display: inline-block;\r\n}\r\n.navLink:hover{\r\n   text-decoration: none\r\n}\r\n.navRight ul li{\r\n   list-style: none;\r\n    display: inline-block;\r\n    padding:14px 10px;\r\n    font-size: 15px;\r\n}\r\n.navRight ul li.active{\r\n   background: #1f6db1\r\n}\r\n.navRight ul {\r\n    -webkit-margin-before: 0;\r\n    -webkit-margin-after: 0;\r\n    -webkit-padding-start: 0;\r\n}\r\n.navbar-brand{\r\n   margin: 0px;\r\n    padding:10px 0;\r\n}\r\n@media screen and (max-width:650px){\r\n    .navbar-brand{\r\n       font-size: 14px;\r\n   }\r\n    .navRight ul li{\r\n       padding: 9px;\r\n   }\r\n    .appheader{\r\n        padding-top: 15px;\r\n        padding-bottom: 5px;\r\n        line-height: 40px;\r\n        font-size: 22px;\r\n        padding-left: 15px;\r\n   }\r\n    .navLogo{\r\n       padding:9px 0;\r\n   }\r\n}\r\n"

/***/ }),

/***/ "./src/app/topbar/topbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"headerBg\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navHeader\">\n      <div class=\"navLogo\"><a class=\"\">Countable-Demo </a></div>\n      <div class=\"navRight\">\n        <ul>\n          <li class=\"active\">\n            <a class=\"navLink\" [routerLink]=\"['/home']\">Home</a>\n          </li>\n          <!-- <li>\n            <a class=\"navLink\">About</a>\n          </li> -->\n        </ul>\n      </div>\n      <div class=\"clr\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopbarComponent = /** @class */ (function () {
    function TopbarComponent() {
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/topbar/topbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/admin1/ExpenceTracker/ExpensesTrackerDemo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map