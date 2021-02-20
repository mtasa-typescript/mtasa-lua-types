/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Table, XmlNode } from "types/mtasa/client/structure";

/**
 * This function copies all contents of a certain node in a XML document to a new document file, so
 * the copied node becomes the new file's root node.
 * The new file will not be saved to file system until [[xmlSaveFile]]() is called
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlCopyFile|MTASA Wiki}
 * @param nodeToCopy the xmlnode that is to be copied to a new document.
 * @param newFilePath the path of the file that is to be created, in the following format:
 * :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the
 * root directory of the resource to the file.  :For example, to create a file named 'newfile.xml' with
 * myNode as the root node in the resource 'ctf', it can be done from another resource this way:
 * ''xmlCopyFile(myNode, ":ctf/newfile.xml")''.  :If the file is to be in the current resource, only the file
 * path is necessary, e.g. ''xmlCopyFile(myNode, "newfile.xml")''.
 * @return Returns the [[xmlnode]] of the copy if the node was successfully copied, ''false'' if
 * invalid arguments were passed.
 */
export function xmlCopyFile(nodeToCopy: XmlNode, newFilePath: string): XmlNode;

/**
 * This function creates a new child node under an XML node.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlCreateChild|MTASA Wiki}
 * @param parentNode the xmlnode you want to create a new child node under.
 * @param tagName the type of the child node that will be created.
 * @return Returns the created [[xmlnode]] if successful, ''false'' otherwise.
 */
export function xmlCreateChild(parentNode: XmlNode, tagName: string): XmlNode;

/**
 * This function creates a new XML document, which can later be saved to a file by using
 * [[xmlSaveFile]]. This function will overwrite the file specified if it already exists.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlCreateFile|MTASA Wiki}
 * @param filePath The filepath of the file in the following format: :resourceName/path.
 * resourceName is the name of the resource the file will be in, and path is the path from the root directory of
 * the resource to the file.  :For example, if you want to create a file named 'new.xml' in the
 * resource 'ctf', it can be created from another resource this way: ''xmlCreateFile(":ctf/new.xml",
 * "newroot")''.  :If the file is in the current resource, only the file path is necessary, e.g.
 * ''xmlCreateFile("new.xml", "newroot")''.  :Note that if a different resource than default is being accessed, the
 * caller resource needs access to general.ModifyOtherObjects in the [[ACL]].
 * @param rootNodeName the name of the root node in the XML document.
 * @return Returns the root [[xmlnode]] object of the new XML file if successful, or ''false''
 * otherwise.
 */
export function xmlCreateFile(filePath: string, rootNodeName: string): XmlNode;

/**
 * This function destroys a XML node from the XML node tree.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlDestroyNode|MTASA Wiki}
 * @param theXMLNode The xml node you want to destroy.
 * @return Returns ''true'' if the [[xml node]] was successfully destroyed, ''false'' otherwise.
 */
export function xmlDestroyNode(theXMLNode: XmlNode): boolean;

/**
 * This function returns a named child node of an XML node.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlFindChild|MTASA Wiki}
 * @param parent : This is an xmlnode that you want to find the child node under.
 * @param tagName : This is the name of the child node you wish to find (case-sensitive).
 * @param index : This is the 0-based index of the node you wish to find. For example, to find the
 * 5th subnode with a particular name, you would use 4 as the index value. To find the first occurence,
 * use 0.
 * @return Returns an [[xmlnode]] if the node was found, ''false'' otherwise.
 */
export function xmlFindChild(parent: XmlNode, tagName: string, index: number): XmlNode;

/**
 * This function provides an alternative way to load XML files to [[getResourceConfig]].
 * This function loads an XML file and returns the node by specifying a specific file path, while
 * [[getResourceConfig]] allows for loading an XML file from a resource.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlLoadFile|MTASA Wiki}
 * @param filePath The filepath of the file in the following format: :resourceName/path.
 * resourceName is the name of the resource the file is in, and path is the path from the root directory of the
 * resource to the file.  :For example, if there is a file named 'settings.xml' in the resource 'ctf',
 * it can be accessed from another resource this way: ''xmlLoadFile(":ctf/settings.xml")''.  :If the
 * file is in the current resource, only the file path is necessary, e.g. ''xmlLoadFile("settings.xml")''.
 * @param readOnly By default, the XML file is opened with reading and writing access. You can
 * specify true for this parameter if you only need reading access.
 * @default false
 * @return Returns the root [[xmlnode]] object of an xml file if successful, or ''false'' otherwise.
 * * {{New items|3.0152|1.5|
 * * Print error if something wrong with xml.
 * * |7485}}
 */
export function xmlLoadFile(filePath: string, readOnly?: boolean): XmlNode;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlLoadString|MTASA Wiki}
 * @param xmlString A string containing XML data
 * @return Returns the root [[xmlnode]] object of an xml string if successful, or ''false''
 * otherwise (invalid XML string).
 */
export function xmlLoadString(xmlString: string): XmlNode;

/**
 * This function is used to return an attribute of a node in a configuration file.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetAttribute|MTASA Wiki}
 * @param node The node from which you wish to return the attribute
 * @param name The name of the attribute.
 * @return Returns the attribute in string form or ''false'', if the attribute is not defined.
 */
export function xmlNodeGetAttribute(node: XmlNode, name: string): string;

/**
 * Returns all the attributes of a specific XML node.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetAttributes|MTASA Wiki}
 * @param node the XML node to get the attributes of.
 * @return If successful, returns a table with as keys the names of the attributes and as values
 * the corresponding attribute values. If the node has no attributes, returns an empty table. In case of
 * failure, returns ''false''.
 */
export function xmlNodeGetAttributes(node: XmlNode): Table;

/**
 * This function returns all children of a particular XML node, or a particular child node.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetChildren|MTASA Wiki}
 * @param parent This is the xmlnode you want to retrieve one or all child nodes of.
 * @param index If you only want to retrieve one particular child node, specify its (0-based) index
 * here. For example if you only want the first node, specify 0; the fifth node has index 4, etc.
 * @return If '''index''' isn't specified, returns a table containing all child nodes. If
 * '''index''' is specified, returns the corresponding child node if it exists. If no nodes are found, it
 * returns an empty table. Returns ''false'' in case of failure.
 */
export function xmlNodeGetChildren(parent: XmlNode, index: number): Table | XmlNode;

/**
 * Gets the tag name of the specified XML node.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetName|MTASA Wiki}
 * @param node the node to get the tag name of.
 * @return Returns the tag name of the node if successful, ''false'' otherwise.
 */
export function xmlNodeGetName(node: XmlNode): string;

/**
 * Returns the parent node of an xml node.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetParent|MTASA Wiki}
 * @param node the node of which you want to know the parent.
 * @return Returns the parent node of the specified node if successful. Returns ''false'' if the
 * specified node is the root node or an invalid node was passed.
 */
export function xmlNodeGetParent(node: XmlNode): XmlNode;

/**
 * This function is made to be able to read tag values in XML files (eg.
 * <something>anything</something>).
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeGetValue|MTASA Wiki}
 * @param theXMLNode The xml node of which you need to know the value.
 * @return Returns the value of the node as a [[string]] if it was received successfully, ''false''
 * otherwise.
 */
export function xmlNodeGetValue(theXMLNode: XmlNode): string;

/**
 * This function is used to edit an attribute of a node in a configuration file.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeSetAttribute|MTASA Wiki}
 * @param node The node of which you wish to edit an attribute.
 * @param name The name of the attribute.
 * @return Returns ''true'' if the attribute was set successfully, ''false'' if the node and/or
 * attribute do not exist, or if they're faulty.
 */
export function xmlNodeSetAttribute(node: XmlNode, name: string, float: string): boolean;

/**
 * Sets the tag name of the specified XML node.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeSetName|MTASA Wiki}
 * @param node the node to change the tag name of.
 * @param name the new tag name to set.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function xmlNodeSetName(node: XmlNode, name: string): boolean;

/**
 * This function is made to be able to assign values to tags in XML files (eg.
 * <something>anything</something>).
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlNodeSetValue|MTASA Wiki}
 * @param theXMLNode The xml node you want to set the value of.
 * @param value The string value you want the node to have.  {{New feature/item|4.0140|1.4.0|6782|
 * @param setCDATA A boolean indicating if you want the value to be enclosed inside CDATA tags.  }}
 * @default false
 * @return Returns ''true'' if value was successfully set, ''false'' otherwise.
 */
export function xmlNodeSetValue(theXMLNode: XmlNode, value: string, setCDATA?: boolean): boolean;

/**
 * This function saves a loaded XML file.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlSaveFile|MTASA Wiki}
 * @param rootNode the root xmlnode of the loaded XML file.
 * @return Returns ''true'' if save was successful, ''false'' if the XML file does not exist.
 */
export function xmlSaveFile(rootNode: XmlNode): boolean;

/**
 * Unloads an XML document from memory.
 * @see {@link https://wiki.multitheftauto.com/wiki/xmlUnloadFile|MTASA Wiki}
 * @param node root of the XML document to unload
 * @return Returns ''true'' if the document was unloaded successfully, ''false'' otherwise.
 */
export function xmlUnloadFile(node: XmlNode): boolean;
