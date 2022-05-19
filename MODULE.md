Repo A import Repo B

## Link

=> `npm run build` in repo B
=> npm link

in repo A
run `npm link B`


## How to unlink
in Repo A
=> `npm unlink --no-save B`

in repo B
=> `npm unlink`


## another options
`npm run build` repo B and `serve` it

replace the scrip
ex:
old <script src="https://cnd.js"></script>
new <script src="<B-server">></script>
