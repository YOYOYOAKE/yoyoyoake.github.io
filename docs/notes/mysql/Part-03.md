---
title: Part 03 MySQL数据操作语句（DML）
createTime: 2024/12/03 08:47:33
permalink: /mysql/03/
---

## 1 关键字

> 数据操作的最基本单位是“行”，也称为“记录”，SQL中按行进行增删改查。

- `INSERT`：用于数据插入。
- `UPDATE`：用于数据修改。
- `DELETE`：用于数据删除。

## 2 插入数据

- 为表中所有字段插入一个记录
```SQL
INSERT INTO <表名> VALUES(value1, value2, ...)
```
这种方式插入记录需要为表中的每一个字段指定值，且值的顺序需要与定义表时的字段顺序相对应。

- 为表中指定字段插入一个记录
```SQL
INSERT INTO <表名>(字段A, 字段B, ...) VALUES(value1, value2, ...)
```
这种方式插入记录时，值的顺序需要与指定的字段的顺序相同。

- 同时插入多个记录
```SQL
-- 为所有字段插入
INSERT INTO <表名> VALUES(valueA1, valueB1, ...),(valueA2,valueB2,...),...
-- 为指定字段插入
INSERT INTO <表名>(字段A, 字段B, ...) VALUES(valueA1, valueB1, ...),(valueA2,valueB2,...),...
```

## 3 删除数据

- 删除表中的所有记录
```SQL
DELETE FROM <表名>
```

- 删除表中符合条件的记录
```SQL
DELETE FROM <表名> WHERE <条件>
```