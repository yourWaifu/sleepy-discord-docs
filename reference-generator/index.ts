import * as fs from "fs";
//import * as ejs from "ejs";
import * as path from "path"
/// <reference path="@docusaurus/module-type-aliases" />

//boilerplate code 
async function fileReadAsync(filePath: string): Promise<Buffer> {
    return new Promise(async (resolve, reject) => {
        fs.readFile(filePath, (error, data) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
};

//sidebar type from docusaurus docs
type SidebarItemDoc =
    | string
    | {
        type: 'doc';
        id: string;
    };

type SidebarItemLink = {
    type: 'link';
    label: string;
    href: string;
};

type SidebarItemRef = {
    type: 'ref';
    id: string;
};

type SidebarItemCategory = {
    type: 'category';
    label: string; // Sidebar label text.
    items: SidebarItem[]; // Array of sidebar items.
    collapsed?: boolean; // Set the category to be collapsed or open by default
};

type SidebarItem = SidebarItemDoc | SidebarItemLink | SidebarItemRef | SidebarItemCategory;

type Sidebar = {
  [sidebarId: string]:
    | {
        [sidebarCategory: string]: SidebarItem[];
      }
    | SidebarItem[];
};

export function getReferenceSidebarItems(docsDir: string, referenceDir: string): Array<SidebarItem> {
    let items: Array<SidebarItem> = [];
    let directory = fs.readdirSync(path.join(docsDir, referenceDir), {withFileTypes: true});
    for (let item of directory) {
        if (item.isDirectory()) {
            let category: SidebarItemCategory = {
                type: "category",
                label: item.name,
                items: getReferenceSidebarItems(docsDir, path.join(referenceDir, item.name)),
            };
            items.push(category);
        } else {
            //trim file extension
            let trimmedFilename = item.name.replace(/\.[^/.]+$/, "");
            let posixReferencePath = referenceDir.split(path.sep).join(path.posix.sep);
            items.push(`${posixReferencePath}/${trimmedFilename}`);
        }
    }
    return items;
}