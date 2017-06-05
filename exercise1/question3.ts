null
- nullというオブジェクト。typeof nullを実行すると、objectが返ってくる。
- 該当するものが何もないことを示す。
- nullはリテラル

undefined
- 未定義である。対象のものは存在するが、その値がまだ定義されていない時にundefinedを返す。
- グローバルオブジェクトのプロパティ。値が身定義のオブジェクトのプロパティに対して、undefinedが返ってくる。

NaN
- Not a Numberの略。
- 数値でないことを表す値。parseInt()などを利用した時に数値に変換できないオブジェクトを渡すと返ってくる。
- 

typeof foo === 'undefined'
=> true

typeof foo == 'undefined'
=> true

typeof foo === undefined
=> false

undefined == null
=> true

undefined === null
=> false

false == null
=> false

0 == null
=> false

NaN == null
=> false