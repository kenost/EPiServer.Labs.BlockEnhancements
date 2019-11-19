define([
        "dojo/_base/declare"
    ],
    function (
        declare
    ) {
        return declare(null, {
            // summary:
            //    mixin for commands used in assets menu
            //

            _onModelChange: function () {
                if (this.model instanceof Array) {
                    //this command should be available only if one item selected
                    if (this.model.length === 1) {
                        this.model = this.model[0];
                    } else {
                        this.model = null;
                    }
                }

                if (!this.model) {
                    this.set("canExecute", false);
                    return;
                }

                this.inherited(arguments);
            }
        });
    });
