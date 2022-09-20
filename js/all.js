$(document).ready(function () {
    $('.nav-link,a').click(function () {
        var t = $(this).attr('href');
        var st = $(t).offset().top - 90;
        $('html,body').animate({
            scrollTop: st
        }, 500);
    });
    $('#sub').click(function () {
        location.reload();
    })
    $('#clickchange,#clickchange，#clickchange').click(function () {
        $('#clickchange,#clickchange,#clickchange').removeClass("cl-bg");
        $(this).addClass("cl-bg");
    })
    $(document).on('click', '.q-btn', function () {
		$('.msg-box').append(`
			<div class="p-qu">
				<p>${$(this).text()}</p>
			</div>
		`);
		setTimeout(() => {
			$('.msg-box').append(`
			<div class="r-ans">
				<p>${({
					q1: '目前對WH78星狀變異病毒的完整傳播途徑，尚未完全瞭解。當2020年鄰國不明原因肺炎疫情發生時，案例多數曾至有賣野味的華南海鮮市場活動，環境檢體雖檢出CO-20冠狀病毒，但感染源仍無法釐清。除此，從發病個案的流行病學資訊來看，亦有家庭群聚與醫護人員感染的個案報告，因此高度懷疑可藉由近距離飛沫、直接或間接接觸病人的口鼻分泌物或體液而增加人傳人之感染風險。',
					q2: '除已知會感染人類的病毒以外，其他的動物包括蝙蝠、豬、牛、火雞、貓、狗、雪貂等都有可能感染變異過的動物星狀病毒。而且北美還有些零星的動物傳染給人類的報告。',
					q3: '星狀病毒（Star-virus）為具三層外套膜（envelope）的病毒，抽取亡者的樣本檢驗在電子顯微鏡下可看到類似星狀的外輪突起因此命名。',
					q4: '如有於2年間注射CO-20疫苗者，推測可降低感染，目前WH-78尚無解方。',
				})[$(this).val()]}</p>
			</div>
		`);
		}, 1000)
	});
	$('.fa-robot').click(function () {
		$('.chatbot').fadeToggle()
	});
	$('.contact-box').submit(function () {
		alert('感謝您的建議 我們會盡快給出回覆')
		$('.contact-box input').val();
		return false
	});
});