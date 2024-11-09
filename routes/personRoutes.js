const express = require("express")
const router = express.Router();
const personController = require("../controller/personControleer")
//routes for creating , updating, deleting , reading
router.post("/crete",personController.createPerson)
router.post("/crete-many",personController.createManypeople)
router.get("/find/:name",personController.findpeopleByname)
router.get("/find-food/:food",personController.findPersonByFavoriteFood)
router.get("find-id/:personId",personController.findpersonbyid)
router.put("add-food/:personId",personController.addFoodToPerson)
router.put("upadte-age/:name",personController.updatepesronagebyname)
router.delete("delete-id/peronId",personController.deletepersonByid)
router.delete("delet-name/:name",personController.deletpeopleByname)
module.exports = router;