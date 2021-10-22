//list of <ul> objects
let listGroceryElements = [];
let listGroceryObjects = [];
let globalObjCountDown = 0;
//hendle 
let isTriggerPopUp = false;
//hendle EDIT ACTION
let currentHooksEdit = [];
//Select FORM INPUT MODULES
let formHookTb = 
document.querySelectorAll("section.inputArea > form > label > input");

/*GENERATORS AND SETTERS*/
//GENERATE Grocery Object
const createGroceryObject = (count,nme = "empty",amo = 1, 
uni = "szt",boo = false ) => {
    //Object Constructor
    let tempObject = {
        number: count,
        name: nme,
        amount: amo,
        unit: uni,
        isBought: boo
    };
    //Push Constructor to table
    listGroceryObjects.push(tempObject);
    //
    console.log(`Obj ${tempObject.name} created`);
    return tempObject
}
//GENERATE HTML <li> Object
const generateListElement  = (OBJ, isPushTrue = false,
className = "listElement",
tbName = listGroceryElements) => {
    let generateEle = document.createElement("li");
    generateEle.className = `${OBJ.name} ${className}`;
    generateEle.name = `${OBJ.name}`;
    //generate Sub elements
    const generateSubElements = () => {
        //name html tags
        let childrenTable = ["input","p","p","button"];
        childrenTable.forEach(element => {
            //Make
            let temporaryEle = document.createElement(`${element}`);
            //Pin to Mother
            generateEle.appendChild(temporaryEle);
        });
    } 
    generateSubElements();
    //Sub ele Propierties
    setPropietiesLi(generateEle, OBJ);
    //push <li> to table
    if(isPushTrue){tbName.push(generateEle);}
    //Return <li> Object
    //console.log(`HTML ${OBJ.name} created`);
    return generateEle
}
//SET propierties of <li> by grocery object
const setPropietiesLi = (referenceLi, OBJ) => {
    referenceLi.children[0].type = "checkbox";
    referenceLi.children[0].value = `${OBJ.isBought}`;
    referenceLi.children[1].textContent = `${OBJ.name}`;
    referenceLi.children[2].textContent = `${OBJ.amount} ${OBJ.unit}`;
    referenceLi.children[3].textContent = "Edit";
    
}


/*MAIN ADD LIST FUNCTION*/
const addToList = () => {
    //Textbox Text
    let tempName = formHookTb[0].value;
    if(findErrorName(tempName))
    {
        //Construct Grocery Object with name
        let groObj =  createGroceryObject(globalObjCountDown++, tempName);
        //Generate Html <li> element with groObj
        let tempObjectHtml = generateListElement(groObj,true);
        //Add event to EDIT btn
        tempObjectHtml.children[3].addEventListener("click",
         openEditButton);
        //CHANGE CHECBOX VALUE IN GROCERY OBJECT
        tempObjectHtml.children[0].addEventListener("change",
         changeIsBought);

        //Add to List Html <li>
        document.querySelector("section.listArea > ul")
        .appendChild(tempObjectHtml);
    }
}
//change CHECBOX VALUE of li elemnt to object
const changeIsBought = (refer) => {
    let stringCut = refer.parentNode.name
    //find object
    let hardHookObj = listGroceryObjects.find(element => 
    element.name == stringCut);
    console.log(hardHookObj);
    hardHookObj.isBought = refer.value;
}
//TexboxText STRING error check
const findErrorName = (testName) => {
    if(typeof testName === "string" || testName instanceof String)
    {return true}
    else 
    {console.log(`Object name ${testName} is not a String`);
    return false}
}
//Filter List
const filterGroceryList = (table) => {
    let tempTb = [];
    table.forEach(element => {
        tempTb.push(element.name);
    })
    return tempTb
}
/*EDIT SECTION*/
//MAIN EDIT FUNCTION !!!!!
const openEditButton = (refer) => {
    //GET PARENT NAME AS STRING
    //CurrentTarget prevents initial call from addEventListiner
    let stringCut = refer.currentTarget.parentNode.name;
    //find hook 
    let hardHookLi = listGroceryElements.find(element => 
        element.name == stringCut);
    //find object
    let hardHookObj = listGroceryObjects.find(element => 
        element.name == stringCut);
    //set current HOOKs 
    currentHooksEdit = [hardHookLi,hardHookObj];
   popUpAreaShow();
}
//PopUp On Trigger
const popUpAreaShow = () => {
    let tempHook = document.querySelector(`.popUp`);
    if(!isTriggerPopUp) 
    {
        tempHook.className = `popUp show`;
        isTriggerPopUp = !isTriggerPopUp;
    }
    else 
    {
        tempHook.className = `popUp hide`;
        isTriggerPopUp = !isTriggerPopUp;
    }
}
//Generate Selection generate selection
const makeOptionsAmo = () => {
    let selectHook = document.querySelector(`#uniChange`);
    let unitsTable = ["szt","g","kg", "dag", "l", "ml", "ouc"];

    unitsTable.forEach(unit => {
        let tempOption = document.createElement("option");
        tempOption.value = unit;
        tempOption.textContent = unit;
        selectHook.appendChild(tempOption);
    })
}
makeOptionsAmo();
//edit object and LI by EDIT section
const editActions = () => {
    //GET currently edited LI element and Object 
    let hardHookLi = currentHooksEdit[0];
    let hardHookObj = currentHooksEdit[1];

    let hookTb = document.
    querySelectorAll(".popUp>form>label>input");
    let hookSelect = document.
    querySelector(".popUp>form>label>select");
    //MORPH edited object with current one
    let editedObj = createGroceryObject(
        /*hardHookObj.number*/1,
        hookTb[0].value,
        hookTb[1].value,
        hookSelect.value,
        hardHookObj.isBought);
    //replace Object
    hardHookObj = editedObj;
    //Edit LI element
    setPropietiesLi(hardHookLi, hardHookObj);
    hardHookLi.name = `${hardHookObj.name}`;
    hardHookLi.className = `${hardHookObj.name} listElement`;
}


/*EVENT LISTINERS for CONSTANT ELEMENTS*/
//Change edit Btn event
const editConfirmBtn = document.querySelector("#btnChange");
editConfirmBtn.addEventListener("click", editActions);
//Close Edit Btn event
const editCloseBtn = document.querySelector("#btnCloseChange");
editCloseBtn.addEventListener("click", popUpAreaShow);
//add '+' Btn event
formHookTb[1].addEventListener("click",
    addToList
);









    













