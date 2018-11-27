#!/bin/bash -ex

node src/tests/api &

dredd

exit
