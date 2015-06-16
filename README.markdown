~~jQuery-~~Typing
=============

Assign callbacks for started/stopped typing events. Without jQuery!


Usage
-----

    Typing('my_div_id', {
        start: function (event, $elem) {
            $elem.css('background', '#fa0');
        },
        stop: function (event, $elem) {
            $elem.css('background', '#f00');
        },
        delay: 400
    });

`Typing` is function with just one plain-object argument with `start`, `stop` and
`delay` keys. They are all optional, so you can either pass only
`start` callback, `stop` callback, `stop` callback and `delay` time,
or everything.

`delay` is amount of time the plugin waits for another keypress before
judging that typing has stopped; it is expressed in milliseconds and
defaults to 400. Regardless of `delay`'s value, the `stop` callback is
called immediately when blur event occurs.

Callbacks are passed two arguments: event that caused callback execution
and HTML Element object for matched element. Possible events are `keypress`
or `keydown` for `start` callbacks and `keyup` or `blur` for `stop`
callbacks.


Demo
----

*soon*


Meta
----

Typing is written by [Flavio Laino][].
Original [jQuery-typing][] is written by [Maciej Konieczny][].

  [jQuery-typing]: https://github.com/narfdotpl/jquery-typing
  [Maciej Konieczny]: http://narf.pl/
  [Flavio Laino]: http://flaviolaino.it/
