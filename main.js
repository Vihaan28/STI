
function saveData() {
    const data1 = document.getElementById('dataInput1').value;
    const data2 = document.getElementById('dataInput2').value;
    const data3 = document.getElementById('dataInput3').value;
    const data4 = document.getElementById('dataInput4').value;
    const data5 = document.getElementById('dataInput5').value;
    const data6 = document.getElementById('dataInput6').value;
    const data7 = document.getElementById('dataInput7').value;
    const data8 = document.getElementById('dataInput8').value;
    const data9 = document.getElementById('dataInput9').value;
    const data10 = document.getElementById('dataInput10').value;
    const data11 = document.getElementById('dataInput11').value;
    const data12 = document.getElementById('dataInput12').value;
    const data13 = document.getElementById('dataInput13').value;
    const data14 = document.getElementById('dataInput14').value;
    const data15 = document.getElementById('dataInput15').value;
    const data16 = document.getElementById('dataInput16').value;
    const data17 = document.getElementById('dataInput17').value;
    const data18 = document.getElementById('dataInput18').value;
    const data19 = document.getElementById('dataInput19').value;
    const data20 = document.getElementById('dataInput20').value;
    const data21 = document.getElementById('dataInput21').value;
    const data22 = document.getElementById('dataInput22').value;
    const data23 = document.getElementById('dataInput23').value;
    const data24 = document.getElementById('dataInput24').value;
    const data25 = document.getElementById('dataInput25').value;
    //data_array=[data25,data24,data23]
    //let stocks = JSON.stringify(data_array)
    localStorage.setItem('product1', data1);
    localStorage.setItem('product2', data2);
    localStorage.setItem('product3', data3);
    localStorage.setItem('product4', data4);
    localStorage.setItem('product5', data5);
    localStorage.setItem('product6', data6);
    localStorage.setItem('product7', data7);
    localStorage.setItem('product8', data8);
    localStorage.setItem('product9', data9);
    localStorage.setItem('product10', data10);
    localStorage.setItem('product11', data11);
    localStorage.setItem('product12', data12);
    localStorage.setItem('product13', data13);
    localStorage.setItem('product14', data14);
    localStorage.setItem('product15', data15);
    localStorage.setItem('product16', data16);
    localStorage.setItem('product17', data17);
    localStorage.setItem('product18', data18);
    localStorage.setItem('product19', data19);
    localStorage.setItem('product20', data20);
    localStorage.setItem('product21', data21);
    localStorage.setItem('product22', data22);
    localStorage.setItem('product23', data23);
    localStorage.setItem('product24', data24);
    localStorage.setItem('product25', data25);
    displayData();
}
function displayData() {
    const savedData1 = localStorage.getItem('product1');
    document.getElementById('datapresenterblock1').innerText = savedData1;

    const savedData2 = localStorage.getItem('product2');
    document.getElementById('datapresenterblock2').innerText = savedData2;

    const savedData3 = localStorage.getItem('product3');
    document.getElementById('datapresenterblock3').innerText = savedData3;

    const savedData4 = localStorage.getItem('product4');
    document.getElementById('datapresenterblock4').innerText = savedData4;

    const savedData5 = localStorage.getItem('product5');
    document.getElementById('datapresenterblock5').innerText = savedData5;

    const savedData6 = localStorage.getItem('product6');
    document.getElementById('datapresenterblock6').innerText = savedData6;

    const savedData7 = localStorage.getItem('product7');
    document.getElementById('datapresenterblock7').innerText = savedData7;

    const savedData8 = localStorage.getItem('product8');
    document.getElementById('datapresenterblock8').innerText = savedData8;

    const savedData9 = localStorage.getItem('product9');
    document.getElementById('datapresenterblock9').innerText = savedData9;

    const savedData10 = localStorage.getItem('product10');
    document.getElementById('datapresenterblock10').innerText = savedData10;

    const savedData11 = localStorage.getItem('product11');
    document.getElementById('datapresenterblock11').innerText = savedData11;

    const savedData12 = localStorage.getItem('product12');
    document.getElementById('datapresenterblock12').innerText = savedData12;

    const savedData13 = localStorage.getItem('product13');
    document.getElementById('datapresenterblock13').innerText = savedData13;

    const savedData14 = localStorage.getItem('product14');
    document.getElementById('datapresenterblock14').innerText = savedData14;

    const savedData15 = localStorage.getItem('product15');
    document.getElementById('datapresenterblock15').innerText = savedData15;

    const savedData16 = localStorage.getItem('product16');
    document.getElementById('datapresenterblock16').innerText = savedData16;

    const savedData17 = localStorage.getItem('product17');
    document.getElementById('datapresenterblock17').innerText = savedData17;

    const savedData18 = localStorage.getItem('product18');
    document.getElementById('datapresenterblock18').innerText = savedData18;

    const savedData19 = localStorage.getItem('product19');
    document.getElementById('datapresenterblock19').innerText = savedData19;

    const savedData20 = localStorage.getItem('product20');
    document.getElementById('datapresenterblock20').innerText = savedData20;

    const savedData21 = localStorage.getItem('product21');
    document.getElementById('datapresenterblock21').innerText = savedData21;

    const savedData22 = localStorage.getItem('product22');
    document.getElementById('datapresenterblock22').innerText = savedData22;

    const savedData23 = localStorage.getItem('product23');
    document.getElementById('datapresenterblock23').innerText = savedData23;

    const savedData24 = localStorage.getItem('product24');
    document.getElementById('datapresenterblock24').innerText = savedData24;

    const savedData25 = localStorage.getItem('product25');
    document.getElementById('datapresenterblock25').innerText = savedData25;
}
displayData();

function preload() {
    const savedData1 = localStorage.getItem('product1');
    document.getElementById('datapresenterblock1').innerText = savedData1;

    const savedData2 = localStorage.getItem('product2');
    document.getElementById('datapresenterblock2').innerText = savedData2;

    const savedData3 = localStorage.getItem('product3');
    document.getElementById('datapresenterblock3').innerText = savedData3;

    const savedData4 = localStorage.getItem('product4');
    document.getElementById('datapresenterblock4').innerText = savedData4;

    const savedData5 = localStorage.getItem('product5');
    document.getElementById('datapresenterblock5').innerText = savedData5;

    const savedData6 = localStorage.getItem('product6');
    document.getElementById('datapresenterblock6').innerText = savedData6;

    const savedData7 = localStorage.getItem('product7');
    document.getElementById('datapresenterblock7').innerText = savedData7;

    const savedData8 = localStorage.getItem('product8');
    document.getElementById('datapresenterblock8').innerText = savedData8;

    const savedData9 = localStorage.getItem('product9');
    document.getElementById('datapresenterblock9').innerText = savedData9;

    const savedData10 = localStorage.getItem('product10');
    document.getElementById('datapresenterblock10').innerText = savedData10;

    const savedData11 = localStorage.getItem('product11');
    document.getElementById('datapresenterblock11').innerText = savedData11;

    const savedData12 = localStorage.getItem('product12');
    document.getElementById('datapresenterblock12').innerText = savedData12;

    const savedData13 = localStorage.getItem('product13');
    document.getElementById('datapresenterblock13').innerText = savedData13;

    const savedData14 = localStorage.getItem('product14');
    document.getElementById('datapresenterblock14').innerText = savedData14;

    const savedData15 = localStorage.getItem('product15');
    document.getElementById('datapresenterblock15').innerText = savedData15;

    const savedData16 = localStorage.getItem('product16');
    document.getElementById('datapresenterblock16').innerText = savedData16;

    const savedData17 = localStorage.getItem('product17');
    document.getElementById('datapresenterblock17').innerText = savedData17;

    const savedData18 = localStorage.getItem('product18');
    document.getElementById('datapresenterblock18').innerText = savedData18;

    const savedData19 = localStorage.getItem('product19');
    document.getElementById('datapresenterblock19').innerText = savedData19;

    const savedData20 = localStorage.getItem('product20');
    document.getElementById('datapresenterblock20').innerText = savedData20;

    const savedData21 = localStorage.getItem('product21');
    document.getElementById('datapresenterblock21').innerText = savedData21;

    const savedData22 = localStorage.getItem('product22');
    document.getElementById('datapresenterblock22').innerText = savedData22;

    const savedData23 = localStorage.getItem('product23');
    document.getElementById('datapresenterblock23').innerText = savedData23;

    const savedData24 = localStorage.getItem('product24');
    document.getElementById('datapresenterblock24').innerText = savedData24;

    const savedData25 = localStorage.getItem('product25');
    document.getElementById('datapresenterblock25').innerText = savedData25;
}