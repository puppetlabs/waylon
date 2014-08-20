var Waylon = Waylon || {};

Waylon.JobProgressView = Backbone.View.extend({
    el: 'div',

    initialize: function(options) {
        this.options = options || {};
    },

    template: Handlebars.compile([
        '<span class="glyphicon glyphicon-time" data-toggle="tooltip" title="Estimated time remaining" />',
        '&nbsp;',
        '{{eta}}',
    ].join("")),

    render: function() {

        this.$el.html(this.template(this.model.attributes));

        return this;
    },
});

