import express from "express";

import {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavorit
} from "../../controllers/contactsControllers.js";

import  validateBody  from "../../middlevares/validateBody.js";
import  isValidId  from "../../middlevares/isValidId.js"
import  authenticate  from "../../middlevares/authenticate.js"
import { createContactSchema, updateContactSchema, updateFavoriteSchema }from "../../schemas/contactsSchemas.js"

const contactsRouter= express.Router();

contactsRouter.get("/", authenticate, getAllContacts);

contactsRouter.get("/:contactId", authenticate, isValidId,getContactById);

contactsRouter.delete("/:contactId", authenticate, isValidId, deleteContact);

contactsRouter.post("/", authenticate, validateBody(createContactSchema), createContact);

contactsRouter.put("/:contactId", authenticate, isValidId, validateBody(updateContactSchema), updateContact);

contactsRouter.patch("/:contactId/favorite", authenticate, isValidId, validateBody(updateFavoriteSchema), updateFavorit);

export default contactsRouter;
