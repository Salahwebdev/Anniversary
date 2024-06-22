
function getQuoteByDate() {
  var dateInput = document.getElementById("dateInput").value;
  var quote;

  if (dateInput === "2022-03-21") {
      quote = "اول بوسة واول حضن لروح قلبي";
  } else if (dateInput === "2016-02-18") {
      quote = "اول مرة شوفتك فيها وخطفتي قلبي وعقلي بعيونك الحلوين";
  } else if (dateInput === "2017-06-27") {
      quote = "اول مرة قولتلك بحبك وده كان ومازال اسعد يوم ف حياتي";
  } else if (dateInput === "2000-10-24") {
      quote = "عيد ميلاد روح قلبي";
  } else if (dateInput === "2020-10-13") {
      quote = "يوم خطوبتنا";
  } else {
      quote = "No quote for this date.";
  }

  document.getElementById("quoteDisplay").innerText = quote;
}
