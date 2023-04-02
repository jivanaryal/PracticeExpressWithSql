const Contact = require("../models/Data");

const postData = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, contact } = req.body;
    const contactModal = new Contact(name, email, contact);
    const createRecord = await contactModal.create();

    return res.status(200).json({
      createRecord,
      msg: "Contact Created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const getData = async (req, res) => {
  try {
    const contactModal = await Contact.findAll();
    return res.status(200).json(contactModal[0]);
  } catch (error) {
    console.log(error);
  }
};

const getSingleData = async (req, res) => {
  try {
    const { id } = req.params;
    const contactModel = new Contact();
    const getSingleRecord = await contactModel.findById(id);

    return res.status(200).json(getSingleRecord[0]);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const contactModel = new Contact();
    const deleteRecord = await contactModel.deleteContact(id);
    return res.status(200).json(deleteRecord[0]);
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;

  try {
    const { name, email, contact } = req.body;
    // console.log(name, email, contact);
    const contactModel = new Contact(name, email, contact);
    const createRecord = await contactModel.updateContact(id);
    return res.status(200).json(createRecord[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getData,
  postData,
  getSingleData,
  deleteData,
  updateData,
};
