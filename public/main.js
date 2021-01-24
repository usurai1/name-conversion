// HTMLの準備ができたら中身を実行
$(document).ready(() => {
  // okボタンを押したときに実行
  $("#app .ok").click(() => {
    // inputの値をとる
    const firstname = $("input[name='jpnfirstname']").val();
    const lastname = $("input[name='jpnlastname']").val();
    const sex = $("input[name='sex']:checked").val();
    const isMale = sex === "male"
    // chatを呼び出して結果をとる
    const usaname = jpnToUsa(firstname, lastname, isMale);
    // 結果を反映する
    $("#app .bot").text(usaname);
  });
  $("#app .ok2").click(() => {
    // inputの値をとる
    const firstname = $("input[name='usafirstname']").val();
    const lastname = $("input[name='usalastname']").val();
    const sex = $("input[name='sex2']:checked").val();
    const isMale = sex === "male"
    // chatを呼び出して結果をとる
    const usaname = usaToJpn(firstname, lastname, isMale);
    // 結果を反映する
    $("#app .bot2").text(usaname);
  });
});

