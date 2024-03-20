$(function () {
    // 이벤트 처리 메소드 : on('이벤트타입',콜백함수 {})
    // 이벤트 타입? click, keyup, change
    // 콜백함수(이벤트핸들러) : 이벤트 발생 시 실행 함수

    // 콜백함수 
    // - function()    : ${this} 사용가능
    // () => {}        : ${this} 사용불가

    $('#item1').on('click', function() {
        $('#item1').css('color', 'red')
    })

    // this : 현재 속한 블록 객체, 현재 선택한 요ㅕ소를 가르키는 키워드
    $('#item2').on('click', function() {
        $(this).css('color', 'green')
    })

    // mouseover : 마우스 올릴때
    $('#item3').on('mouseover', function() {
        $(this).css('color', 'gold')
        $(this).css('background-color', 'white')
    })

    // mouseout : 마우스 벗어날때
    $('#item3').on('mouseout', function() {
        $(this).css('color', 'black')
        $(this).css('background-color', 'red')
    })

    // 메소드 체인
    // 하나의 jQuery 객체에 여러 메소드를 연결하는 기법
    $('#item4')
        .on('mouseout', function() {
            $(this).css('color', 'red')
            $(this).css('background-color', 'black')
        })
        .on('mouseover', function() {
            $(this).css('color', 'gold')
            $(this).css('background-color', 'white')
        })

    $('#item5')
        .on('mouseout', function() {
            $(this).css('color', 'red')
            $(this).css('background-color', 'black')
        })
        .on('mouseover', function() {
            $(this).css('color', 'gold')
            $(this).css('background-color', 'white')
        })
        .on('click', function() {
            $(this).css('color', 'green')
        })
        .on('dblclick',function () {
            $(this).css({
                border : '10px solid blue',
                backgroundColor : 'yellow'
            })
        })
})