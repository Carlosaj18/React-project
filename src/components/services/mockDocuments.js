/* --------------------- BAKEND ------------------- */
import documents from "../data/latestDocuments";
let newArry; 

const APICallDocuments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            newArry = documents.slice(0,3)
            resolve(newArry);
        }, 1000)
    })
}

export const APICallDocumentsMore = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            newArry = documents.slice(0,6)
            resolve(newArry);
        }, 1000)
    })
}

export const APICallDocumentsCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let documentFound = documents.filter(documentArray => documentArray.category === category);
            if(documentFound.length > 0)
                resolve(documentFound);
            else 
                reject("Document category not found")
        }, 1000)
    })
}

export const APICallDocumentsCategoryId = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let documentFound = documents.filter(documentArray => documentArray.categoryId === parseInt(categoryId));
            if(documentFound.length > 0)
                resolve(documentFound);
            else 
                reject("Document category not found")
        }, 1000)
    })
}

export const APICallDocumentsTitle = (title) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let documentFound = documents.filter(documentArray => documentArray.title === title);
            console.log(documentFound)
            if(documentFound.length > 0)
                resolve(documentFound);
            else 
                reject("Document category not found")
        }, 1000)
    })
}

export const APICallSingleDocuments = (idURL) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let documentFound = documents.find(documentArray => documentArray.id === parseInt(idURL));
            if(documentFound)
                resolve(documentFound);
            else 
                reject("Document not found")
        }, 1000)
    })
}


export default APICallDocuments;
