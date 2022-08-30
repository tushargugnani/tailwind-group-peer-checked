const plugin = require('tailwindcss/plugin')
const groupPeerChecked = plugin(function groupPeer({ addVariant }) {
    let pseudoVariants = [
      "checked",
    ].map((variant) =>
      Array.isArray(variant) ? variant : [variant, `&:${variant}`],
    );

    for (let [variantName, state] of pseudoVariants) {
      addVariant(`group-peer-${variantName}`, (ctx) => {
        let result = typeof state === "function" ? state(ctx) : state;
        return result.replace(/&(\S+)/, ":merge(.peer)$1 ~ .group &");
      });
    }
  })
 module.exports = groupPeerChecked