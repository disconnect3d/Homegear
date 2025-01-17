export default {
    version: "2.2.0",
    steps: [
        {
            titleIcon: "fa fa-map-o",
            title: {
                "en-US": "Welcome to Node-BLUE 2.2!",
                "ja": "Node-BLUE 2.2へようこそ!"
            },
            description: {
                "en-US": "Let's take a moment to discover the new features in this release.",
                "ja": "本リリースの新機能を見つけてみましょう。"
            }
        },
        {
            title: {
                "en-US": "Search history",
            },
            description: {
                "en-US": "<p>The Search dialog now keeps a history of your searches, making it easier to go back to a previous search.</p>"
            },
            element: "#red-ui-search .red-ui-searchBox-form",
            prepare(done) {
                RED.search.show();
                setTimeout(done,400);
            },
            complete() {
                RED.search.hide();
            },
        },
        {
            title: {
                "en-US": "New wiring actions",
            },
            // image: "images/",
            description: {
                "en-US": `<p>A pair of new actions have been added to help with wiring nodes together:</p>
                          <ul>
                          <li><b><code>Wire Series Of Nodes</code></b> - adds a wire (if necessary) between each pair of nodes in the order they were selected.</li>
                          <li><b><code>Wire Node To Multiple</code></b> - wires the first node selected to all of the other selected nodes.</li>
                          </ul>
                          <p>Actions can be accessed from the Action List in the main menu.</p>`
            },
        },
        {
            title: {
                "en-US": "Deleting nodes and reconnecting wires",
            },
            image: "images/delete-repair.gif",
            description: {
                "en-US": `<p>It is now possible to delete a selection of nodes and automatically repair the wiring behind them.</p>
                          <p>This is really useful if you want to remove a node from the middle of the flow.</p>
                          <p>Hold the Ctrl (or Cmd) key when you press Delete and the nodes will be gone and the wires repaired.</p>
                          `
            }
        },
        {
            title: {
                "en-US": "Detaching nodes from a flow",
            },
            image: "images/detach-repair.gif",
            description: {
                "en-US": `<p>If you want to remove a node from a flow without deleting it,
                          you can use the <b><code>Detach Selected Nodes</code></b> action.</p>
                          <p>The nodes will be removed from their flow, the wiring repaired behind them, and then attached to the mouse
                          so you can drop them wherever you want in the workspace.</p>
                          <p>There isn't a default keyboard shortcut assigned for this new action, but
                          you can add your own via the Keyboard pane of the main Settings dialog.</p>`
            }
        },
        {
            title: {
                "en-US": "More wiring tricks",
            },
            image: "images/slice.gif",
            description: {
                "en-US": `<p>A couple more wiring tricks to share.</p>
                          <p>You can now select multiple wires by holding the Ctrl (or Cmd) key
                          when clicking on a wire. This makes it easier to delete multiple wires in one go.</p>
                          <p>If you hold the Ctrl (or Cmd) key, then click and drag with the right-hand mouse button,
                          you can slice through wires to remove them.</p>`
            }
        }
    ]
}
