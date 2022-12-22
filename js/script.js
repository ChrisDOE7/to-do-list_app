function newItem() {
   let list = $("#list");
   let li = $(<li></li>);
   let inputValue = $("input").val();
   let text = inputValue;
   li.append(text);
}
