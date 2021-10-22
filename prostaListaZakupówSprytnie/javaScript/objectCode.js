/*Tets object Gorcey List*/
function SetObj(num=0,nam="defaultName", val=1, uni="defaulUnit", 
    isToBuy=false) {
            //Object
            this.mainObj = {
                initialNumber: num,
                name: nam,
                value: val,
                unit: uni,
                isBought: isToBuy  
            };
            //List element
            this.htmlLi = {
                tagName: "li", 
                reference: document.createElement('li'),
                className: `.${this.mainObj.name} .listElement`,
                setHtml(){
                    this.reference.setAttribute('class',this.className);
                }
            };
            //TEXT PARAGRAPH
            this.htmlText = {
                tagName: "p", 
                name: `mainText`,
                textContent: `${this.mainObj.name} ${this.mainObj.value} ${this.mainObj.unit}`,
                reference: document.createElement('p'),
                setHtml() {
                    this.reference.setAttribute('name', this.name);
                    this.reference.textContent =  this.textContent;
                }
            };
            //CHECBOX
            this.htmlCheckbox = {
                tagName: "input",
                type: "checkbox",
                reference: document.createElement('input'),
                setHtml: function() {
                    this.reference.setAttribute('type', this.type);
                }
            };
            //BUTON
            this.htmlButtonEdit = {
                tagName: "input",
                type: "button",
                value: "Edit",
                reference: document.createElement('input'),
                setHtml: function() {
                    this.reference.setAttribute('type', this.type);
                    this.reference.setAttribute('value', this.value);
                }
            };
            //SetAtribiutes of html elements
            this.setAtriAll = function() {
                let tempTable = [this.htmlLi,this.htmlCheckbox, this.htmlText,
                this.htmlButtonEdit];

                tempTable.forEach(ele => {ele.setHtml();});
                //delete this.htmlLi
                tempTable.shift();
                //Add children to Parent LI
                tempTable.forEach(ele => {this.htmlLi.reference.appendChild(ele.reference)});
            };
            //Refresh some Atributes of HTML
            this.refreshElements = function(){
                this.htmlLi.className = `.${this.mainObj.name} .listElement`;
                this.htmlLi.reference.className = this.htmlLi.className;
                this.htmlText.textContent = `${this.mainObj.name} ${this.mainObj.value} ${this.mainObj.unit}`;
                this.htmlText.reference.textContent = this.htmlText.textContent;

            };

}

let inputArea = {
    area: document.querySelector(`.inputArea`),
    textInput: document.querySelector(`.inputArea input[type='text']`),
    addButton: document.querySelector(`.inputArea input[type='button']`)
};
let editArea = {
    area: document.querySelector(`.popUp`),
    textInput: document.querySelector(`.popUp input[type='text']`),
    amountNumber: document.querySelector(`.popUp input[type='number']`),
    unitSelect: document.querySelector(`.popUp select`),
    editButton: document.querySelector(`#btnChange`),
    closeButton: document.querySelector(`#btnCloseChange`)
};
let listArea = {
    area: document.querySelector(`.listArea`),
    ulList: document.querySelector(`.listArea> ul`)
};

let objectArray = [];
let currentEditObj;
let isTriggerPopUp = false;

let addList = function() {
    const findErrorName = (str) => {
        let isDoublleTrue = objectArray.some(ele => ele.mainObj.name == str)
        if(typeof str === "string" || str instanceof String) {
            if(objectArray.length>= 1) {
                if(isDoublleTrue){
                console.log(`Obj already created ${str}`);
                return false}
                else return true
            }
            else return true
        }
        else {return false}
    };

    let currentText = inputArea.textInput.value;
    if(findErrorName(currentText))
    {
        let tempObj = new SetObj(0,currentText);
        tempObj.setAtriAll();
        tempObj.htmlButtonEdit.reference.addEventListener('click',
         function(){
        currentEditObj = tempObj;
        popUpShowHide();
        });
        listArea.ulList.appendChild(tempObj.htmlLi.reference);
        objectArray.push(tempObj);
    }
    
};

const popUpShowHide = () => {
    
    if(!isTriggerPopUp) 
    {
        editArea.area.className = `popUp show`;
    }
    else 
    {
        editArea.area.className = `popUp hide`;
    }
    isTriggerPopUp = !isTriggerPopUp;
}

const editObject = function(){
    currentEditObj.mainObj.name = editArea.textInput.value;
    currentEditObj.mainObj.value = editArea.amountNumber.value;
    currentEditObj.mainObj.unit = editArea.unitSelect.value;

    //unit incoming
    currentEditObj.refreshElements();
}

const eventsSetter = function() {
    inputArea.addButton.addEventListener('click', addList);
    editArea.closeButton.addEventListener('click', popUpShowHide);
    editArea.editButton.addEventListener('click', editObject);

}

const unitOptionsSetter = () => {
    let selectHook = editArea.unitSelect;
    let unitsTable = ["szt","g","kg", "dag", "l", "ml", "ounc"];

    unitsTable.forEach(unit => {
        let tempOption = document.createElement("option");
        tempOption.value = unit;
        tempOption.textContent = unit;
        tempOption.name = unit;
        selectHook.appendChild(tempOption);
    });
}

window.onload = function(){
    eventsSetter();
    unitOptionsSetter();
}