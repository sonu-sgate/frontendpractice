import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginreducer } from "../Authentication/Login/Reducer";
import { signupreducer } from "../Authentication/Signup/Reducer";
import {reducer as createreducer} from "../Profile/Reducer"
import { getprofilereducer } from "../GetProfile/Reducer";
import { editprofilereducer } from "../EditProfile/Reducer";
import { deleteprofilereducer } from "../DeleteProfile/Reduce";
import { getnotesreducer } from "../NotesSection/GetNotes/Reducer";
// notes creating ..........................
import { createnotesreducer } from "../NotesSection/CreateNotes/Reducer";
const rootreducers=combineReducers({loginreducer,signupreducer,createreducer,deleteprofilereducer,getprofilereducer,editprofilereducer,
createnotesreducer,getnotesreducer})
export const store=legacy_createStore(rootreducers,applyMiddleware(thunk))

