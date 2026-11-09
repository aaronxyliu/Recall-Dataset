"""Prepare a pinned source checkout without building the application."""
import pathlib
import subprocess

base=pathlib.Path(__file__).resolve().parent
root=base.parents[1]

def ensure(subject):
    key=subject['subject'];application=subject['application'];repository=root/'builds/hufang'/key
    evidence=base/key;evidence.mkdir(parents=True,exist_ok=True)
    with (evidence/'checkout.log').open('a') as log:
        if not (repository/'.git').exists():
            repository.parent.mkdir(parents=True,exist_ok=True)
            subprocess.run(['git','-c','http.version=HTTP/1.1','clone','--filter=blob:none','--no-checkout','https://github.com/'+application['repository']+'.git',str(repository)],check=True,stdout=log,stderr=subprocess.STDOUT,timeout=600)
        current=subprocess.run(['git','-C',str(repository),'rev-parse','HEAD'],capture_output=True,text=True).stdout.strip()
        if current!=application['commit'] or not (repository/application['packageManifest']).exists():
            subprocess.run(['git','-c','http.version=HTTP/1.1','-C',str(repository),'checkout','--detach',application['commit']],check=True,stdout=log,stderr=subprocess.STDOUT,timeout=600)
    return repository
