this.pay = function () {
    var widget = new cp.CloudPayments({language: "ru-RU"});
    widget.charge({ // options
            publicId: 'pk_729c20998d6b0571e963833bd1660',
            description: 'Пример оплаты (деньги сниматься не будут)', //назначение
            amount: 999, //сумма
            currency: 'RUB', //валюта
			invoiceId: '123456',
			accountId: 'user@example.com',
            skin: "mini", //дизайн виджета
            data: {
                myProp: 'myProp value' //произвольный набор параметров
            }
        },
        function (options) { // success
            //действие при успешной оплате
        },
        function (reason, options) { // fail
            //действие при неуспешной оплате
        });
						};	
						
