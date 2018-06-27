function main() {

  $.fn.open = function(delay, rep, speed) {

    if (speed === undefined) {
      speed = '.5s';
    }

    $(this).hide().delay(delay).fadeIn().css('animation', 'slide-up ' + speed);

    if (delay === 0) {
      delay = 100;
    }

    switch (rep) {
      case undefined:
        break;
      case 1:
        $(this).next().open(delay += delay, speed);
        break;
      case 2:
        $(this).next().open(delay += delay, speed);
        $(this).next().next().open(delay += delay, speed);
        break;
      case 3:
        $(this).next().open(delay += delay, speed);
        $(this).next().next().open(delay += delay, speed);
        $(this).next().next().next().open(delay += delay, speed);
        break;

    }
  }

  $("#content").open();

  $("#title").open(100, 1);
  $("#tel").open(0, 2);
}

$(document).ready(main);