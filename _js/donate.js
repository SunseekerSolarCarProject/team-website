var $ = require('jquery');

var $activeDonationAmount;
var $otherAmount;
var $continue;
var other = '';
var amount;

$(window).ready(function() {
    $otherAmount = $('.donationAmounts__amount--other input');
    $otherAmount.keyup(function() {
        toggleActiveAmount(null);
        
        var $this = $(this);
        var newOther = $this.val();

        if (newOther == '' || $.isNumeric(newOther)) {
            amount = other = newOther;
        } else {
            $this.val(other);
        }
    });

    $continue = $('.chooseDonation__continue');
    $continue.on('click', function() {
        if (!amount) {
            alert('You must choose an amount greater than zero!');
            return;
        }

        window.location = $continue.data('url') + amount;
    });

    $('.donationAmounts__amount__clickable').each(function() {
        $(this).on('click', function() {
            var $this = $(this);

            if ($this.is($activeDonationAmount)) {
                $this = null;
                amount = other;
            }

            toggleActiveAmount($this);

            if ($this) {
                amount = $this.data('amount');
            }
        });
    });
});

function toggleActiveAmount($new) {
    if ($activeDonationAmount) {
        $activeDonationAmount.toggleClass('active');
    }

    if ($new) {
        $new.toggleClass('active');
    }

    $activeDonationAmount = $new;
}
