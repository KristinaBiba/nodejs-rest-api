const {Contact} = require("../../service");

const {AppError} = require("../../utils");

const listContacts = async (limit, page, favorite) => {

  const filterRow = favorite
    ? { favorite: favorite }
    : {};
  const paginationPage = +page || 1;
  const paginationLimit = +limit || 5;
  const skip = (paginationPage - 1) * paginationLimit;
  try {
    return await Contact.find(filterRow).select("-__v").skip(skip).limit(paginationLimit);
  } catch (error) {
    return new AppError(500, error);
  }
};
module.exports = listContacts;
