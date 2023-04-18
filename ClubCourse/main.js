
$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;

    let millisecsPerDay = 24*60*60*1000;

    $("#submit").on("click",function(){
        let selectedDate = new Date($("input").val());
        console.log(1);
        setMonthAndDay(selectedDate.getMonth()+1,selectedDate.getDate());
        for(let x=0; x<topicCount;x++){
            let dateString = (new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString();
            let dateArray = dateString.split('/');
            let monthAndDay = dateArray[1]+ '/' + dateArray[2]; 
            $("tr").eq(x+1).find('td:eq(1)').text(monthAndDay);
        }
    });
    
    $("#topicSubmit").on("click",function(){
        let newTopic = $("#newTopic").val();
        let dateString = (new Date(startDate.getTime() + 7*topicCount*millisecsPerDay)).toLocaleDateString();
        let dateArray = dateString.split('/');
        let monthAndDay = dateArray[1]+ '/' + dateArray[2]; 
        if(newTopic.search("假日") != -1){
            $("#courseTable").append(
                "<tr>"+
                `<td style="color:gray">${topicCount+1}</td>`+
                `<td style="color:gray">${monthAndDay}</td>`+
                `<td style="color:gray">${newTopic}</td>`+
                "</tr>"
            );
        }
        else if(topicCount%2 == 1){
            $("#courseTable").append(
                "<tr>"+
                `<td style="color:purple">${topicCount+1}</td>`+
                `<td style="color:purple">${monthAndDay}</td>`+
                `<td style="color:purple">${newTopic}</td>`+
                "</tr>"
            );
        }
        else{
            $("#courseTable").append(
                "<tr>"+
                `<td style="color:orange">${topicCount+1}</td>`+
                `<td style="color:orange">${monthAndDay}</td>`+
                `<td style="color:orange">${newTopic}</td>`+
                "</tr>"
            );
        }
        topic.push(newTopic);
        topicCount++;
    });
    for(let x=0; x<topicCount;x++){
        let dateString = (new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString();
        let dateArray = dateString.split('/');
        let monthAndDay = dateArray[1]+ '/' + dateArray[2];

        if(topic[x].search("假日") != -1){
            $("#courseTable").append(
                "<tr>"+
                `<td style="color:gray">${x+1}</td>`+
                `<td style="color:gray">${monthAndDay}</td>`+
                `<td style="color:gray">${topic[x]}</td>`+
                "</tr>"
            );
        }
        else if(x%2 == 1){
            $("#courseTable").append(
                "<tr>"+
                `<td style="color:purple">${x+1}</td>`+
                `<td style="color:purple">${monthAndDay}</td>`+
                `<td style="color:purple">${topic[x]}</td>`+
                "</tr>"
            );
        }
        else{
            $("#courseTable").append(
                "<tr>"+
                `<td style="color:orange">${x+1}</td>`+
                `<td style="color:orange">${monthAndDay}</td>`+
                `<td style="color:orange">${topic[x]}</td>`+
                "</tr>"
            );
        }
    }
});

