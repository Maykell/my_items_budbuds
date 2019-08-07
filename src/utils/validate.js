import moment from "moment";

const isNameValid = name => {
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
    return regex.test(name);
};

const isDateValid = date => {
    return moment(date, "DD/MM/YYYY", true).isValid();
};

export default { isNameValid, isDateValid };
