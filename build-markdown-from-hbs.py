import os, fnmatch, json, pypandoc
from pprint import pprint

def find_files(directory, pattern):
    for root, dirs, files in os.walk(directory):
        for basename in files:
            if fnmatch.fnmatch(basename, pattern):
                filename = os.path.join(root, basename)
                yield filename

#
# for filename in find_files('app/pods/', '*.hbs'):
#     print 'Found HBS source:', filename
#     print 'Last index of /', filename.rfind('/')


with open('crap.txt', 'r') as myfile:
    isParent = False
    isChild = False
    mutex = 1
    filenames = []
    isNested = False
    parentPath = ""
    directory = ""
    for line in myfile:
      if "items:" in line:
        mutex = mutex + 1
        if mutex > 1:
          directory = parentPath + "/" + line.split("'")[1]
          if not os.path.exists(directory):
            # os.makedirs(directory)
            print directory
        elif mutex == 1:
          directory = "markdown/" + line.split("'")[1]
          if not os.path.exists(directory):
            # os.makedirs(directory)
            print "First", directory
          parentPath = directory
      elif "]}" in line:
        mutex = mutex - 1
        isParent = False
      else:
        filepath = directory + "/" + line.split("'")[1]
        print "Make File: " +  directory + "/" + line.split("'")[1]
        #contents of file
        podDir = "app/pods/"
        HbsDirpath = directory.replace("markdown","app/pods") +"/" + line.split("'")[1] + "/template.hbs"
        print "Opening this path: " + HbsDirpath
        try:
          with open(HbsDirpath, "w+") as hbsfile:
            hbsfile.write("{{markdown-to-html class=\"guide-markdown\" markdown=(fr-markdown-file '" + filepath.replace("markdown/","") + "')}}")
            # print output
            # with open(filepath,"w+") as f:
            #   f.write(output)
            #   f.close()
        except:
          pass
    # print filenames
