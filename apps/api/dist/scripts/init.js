"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _api = require("@dracul/user-backend");

var _api2 = require("@dracul/customize-backend");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

_mongoose.default.Promise = global.Promise;

_mongoose.default.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose.default.set('useCreateIndex', true);

const init = async () => {
  await _api.InitService.initPermissions();
  await (0, _api2.initPermissionsCustomization)();
  await _api.InitService.initAdminRole();
  await _api.InitService.initRoles();
  await _api.InitService.initRootUser();
  await (0, _api2.initCustomization)();
  console.log("Done");
  process.exit();
};

init();