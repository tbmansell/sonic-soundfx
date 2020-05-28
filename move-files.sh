#!/bin/bash

DIR=$1
FILES=$2
EXTENSION=$3
SELECTOR="${DIR}/${FILES}"
COUNTER=1

echo "${SELECTOR}\n"

for SRC in ${SELECTOR}
do
    NEW="${DIR}/${COUNTER}.${EXTENSION}"
    echo "mv ${SRC} ${NEW}"
    mv ${SRC} ${NEW}
    ((COUNTER=COUNTER+1))
done
