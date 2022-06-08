let display=(data,count) => {
   count.innerHTML=null
    data.forEach((el)=>{
        var card= document.createElement("div")
        card.setAttribute("id","cardbox")

        var img=document.createElement("img")
        img.src=el.strMealThumb
        img.setAttribute("id","mealimg")

        var name=document.createElement("h3")
        name.innerText=el.strMeal
        name.style.textAlign="center"

        card.append(img,name)
        count.append(card)
    })
}
export default display