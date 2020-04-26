# loksa-rtl

It converts css to rtl mode

# Example

```
.test {

    margin-right: 10px;
}

```

gets converted into 

```
[dir=""rtl] {
    .test {
        margin-left: 10px;
     }
}
```