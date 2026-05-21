# Minimax and Alpha-Beta Pruning Simulator

A small application for creating trees and simulating the Minimax algorithm and Alpha-Beta pruning.

## Import trees via JSON

You can now paste a JSON object representing a tree directly into the application (menu: Edit -> Import JSON).
The import builds the tree on the canvas with a single action and validates the input to ensure that all leaf nodes have numeric values.

## Accepted JSON schema

Each node (Node) must be a JSON object with the optional properties below:

- `value` : number | null
  - For leaf nodes (no `children`), `value` must contain a numeric value.
  - For internal nodes (with children), `value` should typically be `null` or omitted.
- `children` : array of Node (optional)
  - An array of child nodes. If present, the node is not a leaf, and each element in the array is another Node object.
- `quebra` : boolean (optional)
  - Marks the node as pruned (informational only).
- `label` : string (optional)
  - Descriptive label for the node (not currently used by the renderer).

Example JSON Schema (Draft-07):

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Minimax Tree Node",
  "type": "object",
  "properties": {
    "value": { "type": ["number", "null"] },
    "children": {
      "type": "array",
      "items": { "$ref": "#" }
    },
    "quebra": { "type": "boolean" },
    "label": { "type": "string" }
  },
  "additionalProperties": false
}
```

## Accepted formats in the import dialog

The import dialog accepts:

- The Node object directly (the pasted JSON is treated as the root node), or
- An object with a `tree` field containing the root Node, for example:
  `{ "tree": { ... } }`

## Validation performed by the application

- The import requires that ALL leaf nodes contain numeric `value` properties; if any leaf lacks a numeric `value`, the import will fail with a validation error.
- The layout (node positions) and `nivel` (node level) of each node are computed automatically after import.
- The `pk` (internal identifier) is assigned automatically to new nodes created on the canvas.

## Minimal example

Paste the following JSON into the import dialog:

```json
{
  "value": null,
  "children": [
    {
      "value": null,
      "children": [{ "value": 8 }, { "value": 23 }, { "value": -47 }]
    },
    {
      "value": null,
      "children": [{ "value": 28 }, { "value": -30 }, { "value": -37 }]
    }
  ]
}
```

## Notes

- Node levels and player roles (Max / Min) are inferred by the node's `nivel` (root = level 0 = Max). The alternation follows the standard Minimax and Alpha-Beta rules.
- If you need to share a tree with other users, copy/export the JSON. Export support can be added in future improvements.
- If you need compatibility with a different format (for example, different field names such as `v` instead of `value`), the importer can be extended to support aliases and additional formats.
